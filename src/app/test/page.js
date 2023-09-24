"use client"

import { Document, pdfjs } from 'react-pdf';
import React, { useEffect, useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfExtractor = () => {
  const [numPages, setNumPages] = useState(null);
  const [pdfText, setPdfText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);

    // Extract text from each page
    const textPromises = [];
    for (let i = 1; i <= numPages; i++) {
      pdfjs.getDocument(pdfFile).promise.then(function(pdf) {
        // you can now use *pdf* here
        pdf.getPage(i).then(function(page) {
          // you can now use *page* here
          page.getTextContent().then(function(textContent) {
            // you can now use *textContent* here
            const pageText = textContent.items.map((item) => item.str).join(' ');
            setPdfText(pageText)
            console.log(pageText)
            return pageText;
          });
        });
      });
    }

    Promise.all(textPromises)
      .then((pageTexts) => {
        const extractedText = pageTexts.join(' ');
        setPdfText(extractedText);
      })
      .catch((error) => console.error('Failed to extract PDF text:', error));
  };

  const handleFileSelection = (event) => {
    const file = event.target.files[0];
    setPdfFile(URL.createObjectURL(file));
    setIsLoaded(true);
  }

  return (
    <div>
      {isLoaded ?
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
        />
        : null
      }
      <div>{pdfText}</div>
      <input type="file"
        onChange={handleFileSelection}

        accept="application/pdf" />
      <button></button>
    </div>
  );
};

export default PdfExtractor;