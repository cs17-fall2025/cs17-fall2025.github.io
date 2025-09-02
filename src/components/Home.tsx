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
          CS — fill out our{" "}
          <b>
            <u>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSePgiTgkH0PmWIXtyEvw5_9HSkTFCyuwyAnUhpuI-Pe0EhDZg/viewform"
                target="_blank"
              >
                anonymous feedback form
              </a>
            </u>
          </b>{" "}
          to let us know if we can do anything better! If you have any questions
          on content, post on Ed, come to TA hours or Spike's office hours.
          We're all here to help!
        </p>
        <p>
          Fill in this{" "}
          <b>
            <u>
              <a
                href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfdXhPdlLde_Dur9zUDt9CU7Tx5djqAeug1MA8H4ZfWMBeURw/viewform?usp=pp_url&entry.738272555=Fall+2028+or+Spring+2029&pli=1"
                target="_blank"
              >
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
            target="_blank"
          >
            Waitlist Form
          </a>
          <a
            className="useful-links-btn"
            href="https://docs.google.com/document/d/1GtksfSOpsYO5ZrPZWnWGeNF-wlyGrqLCks4iBqg2ark/edit?usp=sharing"
            target="_blank"
          >
            Syllabus
          </a>
          <a
            className="useful-links-btn"
            href="https://edstem.org/us/courses/85060/discussion"
            target="_blank"
          >
            EdStem
          </a>
          <a
            className="useful-links-btn"
            href="https://www.gradescope.com/courses/1078762"
            target="_blank"
          >
            Gradescope
          </a>
          <a
            className="useful-links-btn"
            href="https://hours.cs.brown.edu/"
            target="_blank"
          >
            Hours
          </a>
          <a
            className="useful-links-btn"
            href="https://csci017.cs.brown.edu/"
            target="_blank"
          >
            RePlay
          </a>
          <a
            className="useful-links-btn"
            href="mailto:cs0170headtas@lists.brown.edu"
          >
            Head TA Email
          </a>
          <a className="useful-links-btn" href="mailto:jfh@cs.brown.edu">
            Spike's Email
          </a>
        </div>
        <hr></hr>
        <div>
          <h3>Calendar</h3>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_8b58741d65ed249db50a44814b59495fa392335549c3d6cdca402f9081462fb9%40group.calendar.google.com&ctz=America%2FNew_York"
            className="calendar"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
