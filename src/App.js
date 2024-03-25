// Assignment 1
// Naidene Myers
// Student ID: 30057884

import React from 'react';
import './App.css';

const data = [
  {
    fw: "Angular",
    kd: "Full-fledged framework with routing and forms handling. Utilizes two-way data binding.",
    sum: "The learning curve's steeper.",
    per: "For the most part, it's fine.",
    cs: "A big and dynamic community.",
    lc: "A slow learning curve."
  },
  {
    fw: "React",
    kd: "Library rather than a framework. Utilizes a virtual DOM for updates.",
    sum: "Very easy to pick up.",
    per: "Efficient updating with a virtual DOM.",
    cs: "A vast community with a huge number of resources.",
    lc: "A slow learning curve."
  },
  {
    fw: "Cycle.js",
    kd: "Built on reactive programming principles. Promotes functional programming.",
    sum: "A gentle learning curve.",
    per: "Focuses on reactive programming.",
    cs: "A smaller, more focused community.",
    lc: "Might have a hard time learning it."
  },
  {
    fw: "Stimulus",
    kd: "Minimalistic JavaScript framework. Enhances existing HTML through data attributes.",
    sum: "Simple, easy to handle.",
    per: "Focuses on HTML improvements.",
    cs: "An active and growing community",
    lc: "This is designed to make learning simple."
  }
];

function App() {
  return (
    <div className="App">
      <header className="header">
      <h1>Assignment 1</h1>
      <p>Naidene Myers - Student ID: 30057884</p>
      </header>
      <table>
        <thead>
          <tr>
            <th>Framework</th>
            <th>Key Differences</th>
            <th>Summary</th>
            <th>Performance</th>
            <th>Community Support</th>
            <th>Learning Curve</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.fw}</td>
                <td>{val.kd}</td>
                <td>{val.sum}</td>
                <td>{val.per}</td>
                <td>{val.cs}</td>
                <td>{val.lc}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p><b>Similarities:</b> All built on JavaScript. Varying community sizes, but each enjoys engaged support. Prioritize performance for efficient UI updates. Emphasize modularity for reusable components. Support reactive programming for dynamic applications. All frameworks/libraries optimize DOM manipulation. </p>
      <p><b>Recommendation:</b> React and Angular are two of the most recommended technologies to develop a SPA.</p>
    </div>
  );
}

export default App;
