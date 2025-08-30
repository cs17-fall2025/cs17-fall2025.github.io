import React from "react";
export default function Resources() {
  return (
    <div className="page-content">
      <h1>Resources</h1>
      <div className="resource-div">
        <div className="resource-column">
          <p>General</p>
          <a href="#">
            <div className="resource-box">Syllabus</div>
          </a>
          <a href="#">
            <div className="resource-box">Common mistakes</div>
          </a>
          <a href="#">
            <div className="resource-box">Design recipe</div>
          </a>
          <a href="#">
            <div className="resource-box">Apples</div>
          </a>
        </div>

        <div className="resource-column">
          <p>Racket and ReasonML</p>
          <a href="#">
            <div className="resource-box">Style Guide</div>
          </a>
          <a href="#">
            <div className="resource-box">Racket Style Guide</div>
          </a>
          <a href="#">
            <div className="resource-box">Racket Teachpack</div>
          </a>

          <a href="#">
            <div className="resource-box">ReasonML Debugging</div>
          </a>
          <a href="#">
            <div className="resource-box">ReasonML Install</div>
          </a>
          <a href="#">
            <div className="resource-box">Racket to ReasonML</div>
          </a>
        </div>

        <div className="resource-column">
          <p>Policies and Guides</p>
          <a href="#">
            <div className="resource-box">EdStem Policies</div>
          </a>
          <a href="#">
            <div className="resource-box">Course Policies</div>
          </a>
          <a href="#">
            <div className="resource-box">Hours Policies</div>
          </a>
          <a href="#">
            <div className="resource-box">Pair Programming</div>
          </a>
          <a href="#">
            <div className="resource-box">Symbol Guide</div>
          </a>
        </div>
      </div>
      <h1>Calendar</h1>
      TBA
      {/* <div id="calendar-container">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_0db874e8f21894ea36adae30d77bc6584c5ff8ef7038145752cfaa0601b1f246%40group.calendar.google.com&ctz=America%2FNew_York"
            width="800"
            height="600"
          ></iframe>
        </div> */}
    </div>
  );
}
