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
          <a href="https://adamapples.blogspot.com/">
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
      <h2>Calendar</h2>
      <p>Contains info on assignments, office hours, and labs.</p>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_8b58741d65ed249db50a44814b59495fa392335549c3d6cdca402f9081462fb9%40group.calendar.google.com&ctz=America%2FNew_York"
        className="calendar"
      ></iframe>
    </div>
  );
}
