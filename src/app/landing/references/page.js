"use client";

import { Document, pdfjs } from "react-pdf";
import React, { use, useEffect, useState } from "react";
import next from "next";

import ProfileView from "./ProfileView";
import ProblemView from "./ProblemView";
import { set } from "zod";
import { pdf } from "@react-pdf/renderer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfExtractor = () => {
  const [numPages, setNumPages] = useState(null);
  const [pdfText, setPdfText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [profile, setProfile] = useState([]);
  const [problem, setProblem] = useState([]);
  var nextPdfFile = "a";

  const handlePdfTextChange = (text) => {
    setPdfText(text, () => {
      console.log(`Next PDF TEXT 4: ${pdfText}`);
    });
    console.log(`Next PDF TEXT 3: ${pdfText}`);
  };

  useEffect(() => {
    if (pdfText != "") {
      fetchAnalysis();
    }
  }, [pdfText]);

  const onDocumentLoadSuccess = async ({ numPages }) => {
    setNumPages(numPages);

    // Extract text from each page
    const textPromises = [];
    for (let i = 1; i <= numPages; i++) {
      pdfjs.getDocument(pdfFile).promise.then(function (pdf) {
        // you can now use *pdf* here
        pdf.getPage(i).then(function (page) {
          // you can now use *page* here
          page.getTextContent().then(function (textContent) {
            // you can now use *textContent* here
            const pageText = textContent.items
              .map((item) => item.str)
              .join(" ");
            nextPdfFile = pageText;
            handlePdfTextChange(pageText);
            console.log(`CURRENT ${nextPdfFile}`);
            return pageText;
          });
        });
      });
    }
    console.log(`Next PDF TEXT 1: ${pdfText}`);
    // Promise.all(textPromises)
    //   .then((pageTexts) => {
    //     const extractedText = pageTexts.join(" ");
    //     nextPdfFile = extractedText;
    //     setPdfText(extractedText);
    //   })
    //   .catch((error) => console.error("Failed to extract PDF text:", error));
  };

  const fetchAnalysis = async () => {
    console.log(`Next PDF TEXT 2: ${pdfText}`);
    const newCV = { text: pdfText };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCV),
    };

    await fetch("http://localhost:8000/analyzeCV", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProfile(data);
        console.log("Calling fetchProblem");
        fetchProblem(data);
      });
  };

  const handleFileSelection = async (event) => {
    const file = event.target.files[0];
    let nextPdfFile = URL.createObjectURL(file);
    setPdfFile(nextPdfFile);
    setIsLoaded(true);
  };

  const fetchProblem = async (data) => {
    const valueForm = {
      languages: data.languages.toString(),
      skills: data.skills.toString(),
      tools: data.tools.toString(),
    };
    console.log(valueForm);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(valueForm),
    };

    await fetch("http://localhost:8000/generateCode", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProblem(data);
      });
  };

  return (
    <div>
      {isLoaded ? (
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} />
      ) : null}
      <input
        type="file"
        onChange={handleFileSelection}
        accept="application/pdf"
      />
      <div>
        {profile ? (
          profile.languages ? (
            profile.tools ? (
              profile.skills ? (
                <ProfileView profile={profile} />
              ) : (
                ""
              )
            ) : (
              ""
            )
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {problem ? (
          problem.testcases ? (
            <ProblemView problem={problem} />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
      <button></button>
    </div>
  );
};

export default PdfExtractor;
