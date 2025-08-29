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
          <a
            className="useful-links-btn"
            href="https://docs.google.com/document/d/1GtksfSOpsYO5ZrPZWnWGeNF-wlyGrqLCks4iBqg2ark/edit?usp=sharing"
          >
            Syllabus
          </a>
          <a
            className="useful-links-btn"
            href="https://edstem.org/us/courses/85060/discussion"
          >
            EdStem
          </a>
          <a className="useful-links-btn">Gradescope</a>
          <a className="useful-links-btn">Hours</a>
          <a className="useful-links-btn">RePlay</a>
        </div>
      </div>
    </div>
  );
}
