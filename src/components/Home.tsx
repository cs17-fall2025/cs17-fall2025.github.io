import React from "react";
import cover from "../assets/cs17cover.gif";

export default function Labs() {
  return (
    <div className="page-content">
      <div>
        <img src={cover} className="cover-image" alt="CS17 Cover" />
        <h2>Welcome to CS17! 🍎</h2>
        <p>
          CS17 (CSCI 0170) is an intro computer science class at Brown
          University — emphasis on intro! We take your ideas very seriously and
          want to make a welcoming environment for everyone who wants to learn
          CS — fill out our anonymous feedback form to let us know if we can do
          anything better! If you have any questions on content, post on Ed,
          come to TA hours or Spike's office hours. We're all here to help!
        </p>
        <p>
          Fill in this{" "}
          <b>
            <u>
              <a href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfdXhPdlLde_Dur9zUDt9CU7Tx5djqAeug1MA8H4ZfWMBeURw/viewform?usp=pp_url&entry.738272555=Fall+2028+or+Spring+2029&pli=1">
                form
              </a>
            </u>
          </b>{" "}
          if you want to be on a waitlist to enroll in CSCI0170.
        </p>
      </div>
      <hr></hr>
      <div>
        <h3>Useful Links</h3>
        <div className="useful-links">
          <a
            className="useful-links-btn"
            href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfdXhPdlLde_Dur9zUDt9CU7Tx5djqAeug1MA8H4ZfWMBeURw/viewform?usp=pp_url&entry.738272555=Fall+2028+or+Spring+2029&pli=1"
          >
            Waitlist Form
          </a>
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
          <a
            className="useful-links-btn"
            href="https://www.gradescope.com/courses/1078762"
          >
            Gradescope
          </a>
          <a className="useful-links-btn" href="https://hours.cs.brown.edu/">
            Hours
          </a>
          <a className="useful-links-btn" href="https://csci017.cs.brown.edu/">
            RePlay
          </a>
        </div>
      </div>
    </div>
  );
}
