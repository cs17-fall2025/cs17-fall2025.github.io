import React from "react";
export default function Resources() {
  return (
    <div className="page-content">
      <h1>Resources</h1>
      <div className="resource-div">
        <div className="resource-column">
          <p>General</p>
          <a
            href="https://docs.google.com/document/d/1GtksfSOpsYO5ZrPZWnWGeNF-wlyGrqLCks4iBqg2ark/edit?tab=t.0"
            target="_blank"
          >
            <div className="resource-box">Syllabus</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1N1qzB7ObO8fr3NWit9w5kthb8I2RJFSp/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Common Mistakes</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1vTgvHLmsQuEZBCJ7tsHKgsDKdoiLt8Xe/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Design Recipe</div>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSePgiTgkH0PmWIXtyEvw5_9HSkTFCyuwyAnUhpuI-Pe0EhDZg/viewform"
            target="_blank"
          >
            <div className="resource-box">Anon Feedback Form</div>
          </a>
          <a href="https://adamapples.blogspot.com/" target="_blank">
            <div className="resource-box">Apples</div>
          </a>
        </div>

        <div className="resource-column">
          <p>Racket and ReasonML</p>
          <a
            href="https://drive.google.com/file/d/1ghLCBpxztGqHlXMkKsOzVSjy9OlEZYVc/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Style Guide</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1iTQLs6Nqz6LthyQtOrVA9caR6FlpoYH8/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Racket Style Guide</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1wAeUiFz3aoh1oQ-W9jBLBk0-xCO1RSb0/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Racket Teachpack</div>
          </a>

          <a
            href="https://drive.google.com/file/d/1t7wTIHGm8Yurl2sznWhJARglo5akl1Rw/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">ReasonML Debugging</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1L37uUaRYlr9mbERMTjilOUB3W4dVYHVc/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">ReasonML Install</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1FKOZ89J19njd-bIlIMg6Im6vfcGIm2kI/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Racket to ReasonML</div>
          </a>
        </div>

        <div className="resource-column">
          <p>Policies and Guides</p>
          <a
            href="https://drive.google.com/file/d/1xvXDuuu05A_U41vnwrogDUkfA2qEO3Ot/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">EdStem Policies</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1DRVNiZEo7KM8F8eCtYzeT-7ytiEUeNfN/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Course Policies</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1aCD0yGWQUCmAhr3s_LqYqe4hHQU8NjPL/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Hours Policies</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1g9A0VKzL2Ao4yAD_N6BLSLx9xlCy4_bv/view?usp=sharing"
            target="_blank"
          >
            <div className="resource-box">Pair Programming</div>
          </a>
          <a
            href="https://drive.google.com/file/d/15oF8xQTh6kqYe2aFbuusQt3xOD9Y93ba/view?usp=sharing"
            target="_blank"
          >
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
