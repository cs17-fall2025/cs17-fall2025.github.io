import React from "react";
export default function Labs() {
  return (
    <div className="page-content">
      <div>
        <h2>Welcome to CS17!</h2>
        <p>
          CS17 (CSCI 0170) is an intro computer science class at Brown
          University — emphasis on intro! We take your ideas very seriously and
          want to make a welcoming environment for everyone who wants to learn
          CS — fill out our anonymous feedback form to let us know if we can do
          anything better! If you have any questions on content, post on Ed,
          come to TA hours or Prof. Spike's office hours. We're all here to
          help!
        </p>
      </div>
      <hr></hr>
      <div>
        <h3>Useful Links</h3>
        <div className="useful-links">
          <button className="useful-links-btn">Syllabus</button>
          <button className="useful-links-btn">EdStem</button>
          <button className="useful-links-btn">Gradescope</button>
          <button className="useful-links-btn">Hours</button>
          <button className="useful-links-btn">RePlay</button>
        </div>
      </div>
    </div>
  );
}
