import React from "react";

const ProblemView = ({ problem }) => {
  return (
    <div>
      <h1>Language: {problem.language}</h1>
      <h1>Description</h1>
      <p>{problem.problem}</p>

      <ul>
        {problem.testcases.map((testcase, index) => {
          <li>
            <li>Input: {testcase.input}</li>
            <li>output: {testcase.output}</li>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default ProblemView;
