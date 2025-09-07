import React from "react";

const date_formatting: Intl.DateTimeFormatOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  hour12: true,
  minute: "2-digit",
};
const date_formatting_2: Intl.DateTimeFormatOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
};

const labs = [
  {
    /* update handout */
    title: "Lab 11: Sort",
    out: new Date("10 Nov 2025 14:00:00 EST"),
    due: new Date("17 Nov 2025 13:59:00 EST"),
    link: "#",
    slide: "#",
    source: "#",
  },
  {
    /* update handout */
    title: "Lab 10: Game",
    out: new Date("3 Nov 2025 14:00:00 EST"),
    due: new Date("10 Nov 2025 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 9: ADTs",
    out: new Date("27 Oct 2025 14:00:00 EST"),
    due: new Date("3 Nov 2025 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 8: Environments",
    out: new Date("20 Oct 2025 14:00:00 EST"),
    due: new Date("27 Oct 2025 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 7: Debugging",
    out: new Date("13 Oct 2025 14:00:00 EST"),
    due: new Date("20 Oct 2025 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 6: Reason",
    out: new Date("6 Oct 2025 14:00:00 EST"),
    due: new Date("13 Oct 2025 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 5: Search",
    out: new Date("29 Sep 2025 14:00:00 EST"),
    due: new Date("6 Oct 2025 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 4: Natural Numbers",
    out: new Date("22 Sep 2025 14:00:00 EST"),
    due: new Date("29 Sep 2025 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 3: Recursion",
    out: new Date("22 Sep 2025 14:00:00 EST"),
    due: new Date("29 Sep 2025 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    /* update handout */
    title: "Lab 2: Racket",
    out: new Date("15 Sep 2025 14:00:00 EST"),
    due: new Date("22 Sep 2025 13:59:00 EST"),
    link: "",
    slide: "",
    source: "",
  },
  {
    title: "Lab 1: Setup",
    out: new Date("7 Sep 2025 12:45:00 EST"),
    due: new Date("14 Sep 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/17oOZJbiA4zrC-vu-g7Y-w2T7LIsF0Fer/view?usp=sharing",
    slide:
      "https://docs.google.com/presentation/d/1mwsMYrznrFUu_vIK8-e0Mrxb1rEVR8yFlY5lkhUMDdY/edit?usp=sharing",
    source: "",
  },
];

const homeworks = [
  {
    title: "HW 10: Game Tools",
    out: new Date("14 Nov 2025 12:00:00 EST"),
    due: new Date("20 Nov 2025 22:00:00 EST"),
    late: new Date("21 Nov 2025 22:00:00 EST"),
    link: "#",
    source: "#",
  },
  {
    title: "HW 9: Trees, Trees, ...and Lists",
    out: new Date("7 Nov 2025 12:00:00 EST"),
    due: new Date("13 Nov 2025 22:00:00 EST"),
    late: new Date("14 Nov 2025 22:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 8: ADTs",
    out: new Date("24 Oct 2025 12:00:00 EST"),
    due: new Date("30 Oct 2025 22:00:00 EST"),
    late: new Date("31 Oct 2025 22:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 7: Rackettecita",
    out: new Date("17 Oct 2025 12:00:00 EST"),
    due: new Date("23 Oct 2025 22:00:00 EST"),
    late: new Date("24 Oct 2025 22:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 6: K-Subsets and Matrices",
    out: new Date("10 Oct 2025 12:00:00 EST"),
    due: new Date("16 Oct 2025 22:00:00 EST"),
    late: new Date("17 Oct 2025 22:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 5: More HOPs and Subsets",
    out: new Date("3 Oct 2025 12:00:00 EST"),
    due: new Date("9 Oct 2025 22:00:00 EST"),
    late: new Date("10 Oct 2025 22:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 4: More Recursion",
    out: new Date("26 Sep 2025 12:00:00 EST"),
    due: new Date("2 Oct 2025 22:00:00 EST"),
    late: new Date("3 Oct 2025 22:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 3: Recursion",
    out: new Date("19 Sep 2025 12:00:00 EST"),
    due: new Date("25 Sep 2025 22:00:00 EST"),
    late: new Date("26 Sep 2025 22:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 2: Procedures",
    out: new Date("11 Sep 2025 10:00:00 EST"),
    due: new Date("18 Sep 2025 22:00:00 EST"),
    late: new Date("19 Sep 2025 22:00:00 EST"),
    link: "",
    source: "",
  },
  {
    title: "HW 1: Warmup",
    out: new Date("3 Sep 2025 15:00:00 EST"),
    due: new Date("10 Sep 2025 22:00:00 EST"),
    late: new Date("11 Sep 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1x-gdW5Qo4bs6loamGQV0-1jk2a5QzjhP/view?usp=sharing",
    source: "",
  },
];

const projects = [
  {
    title: "Game",
    out: new Date("11 Nov 2025 12:00:00 EST"),
    due: new Date("6 Dec 2025 22:00:00 EST"),
    late: new Date("7 Dec 2025 22:00:00 EST"),
    link: "#",
    source: "#",
    gearup: "#",
  },
  {
    title: "Rackette",
    out: new Date("24 Oct 2025 12:00:00 EST"),
    due: new Date("8 Nov 2025 22:00:00 EST"),
    late: new Date("9 Nov 2025 22:00:00 EST"),
    link: "",
    source: "",
    gearup: "",
  },
  {
    title: "Bignum",
    out: new Date("20 Sep 2025 12:00:00 EST"),
    due: new Date("4 Oct 2025 22:00:00 EST"),
    late: new Date("5 Oct 2025 22:00:00 EST"),
    link: "#",
    source: "#",
    gearup: "#",
  },
];

function formatDate(date: Date, opts: Intl.DateTimeFormatOptions) {
  return date.toLocaleString("en-US", opts);
}

export default function Assignments() {
  const now = new Date();

  const availableLabs = labs.filter((lab) => now >= lab.out);
  const availableHomeworks = homeworks.filter((hw) => now >= hw.out);
  const availableProjects = projects.filter((proj) => now >= proj.out);

  const currLab = availableLabs[0];
  const currHw = availableHomeworks[0];
  const currProj = availableProjects[0];

  return (
    <div className="page-content">
      <h1>Assignments</h1>
      <h3>Current Assignments</h3>
      <div className="current-assignments">
        {/* Lab Card */}
        {currLab ? (
          <div className="card">
            <a className="card-title" href={currLab.link || "#"}>
              <h3>{currLab.title}</h3>
            </a>
            <hr />
            <div className="assignment-card-line">
              <b>Released:&nbsp;</b>
              <span className="card-out">
                {formatDate(currLab.out, date_formatting)}
              </span>
            </div>
            <div className="assignment-card-line">
              <b>Due:&nbsp;</b>
              <span className="card-due">
                {formatDate(currLab.due, date_formatting)}
              </span>
            </div>
            <div className="source-slide">
              {currLab && currLab.link ? (
                <a className="slide" href={currLab.link}>
                  <b>Link</b>
                </a>
              ) : null}
              {currLab && currLab.slide ? (
                <a className="slide" href={currLab.slide}>
                  <b>Slides</b>
                </a>
              ) : null}
              {currLab && currLab.source ? (
                <a className="setup" href={currLab.source}>
                  <b>Setup</b>
                </a>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* HW Card */}
        {currHw ? (
          <div className="card">
            <a className="card-title" href={currHw.link || "#"}>
              <h3>{currHw.title}</h3>
            </a>
            <hr />
            <div className="assignment-card-line">
              <b>Released:&nbsp;</b>
              <span className="card-out">
                {formatDate(currHw.out, date_formatting)}
              </span>
            </div>
            <div className="assignment-card-line">
              <b>Due:&nbsp;</b>
              <span className="card-due">
                {formatDate(currHw.due, date_formatting)}
              </span>
            </div>
            <div className="source-slide">
              {currHw && currHw.link ? (
                <a className="slide" href={currHw.link}>
                  <b>Link</b>
                </a>
              ) : null}
              {currHw && currHw.source ? (
                <a className="setup" href={currHw.source}>
                  <b>Setup</b>
                </a>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* Project Card */}
        {currProj ? (
          <div className="card">
            <a className="card-title" href={currProj.link || "#"}>
              <h3>{currProj.title}</h3>
            </a>
            <hr />
            <div className="assignment-card-line">
              <b>Released:&nbsp;</b>
              <span className="card-out">
                {formatDate(currProj.out, date_formatting)}
              </span>
            </div>
            <div className="assignment-card-line">
              <b>Due:&nbsp;</b>
              <span className="card-due">
                {formatDate(currProj.due, date_formatting)}
              </span>
            </div>
            <div className="source-slide">
              {currProj && currProj.link ? (
                <a className="slide" href={currProj.link}>
                  <b>Link</b>
                </a>
              ) : null}
              {currProj && currProj.gearup ? (
                <a className="Gearup" href={currProj.gearup}>
                  <b>Slides</b>
                </a>
              ) : null}
              {currProj && currProj.source ? (
                <a className="setup" href={currProj.source}>
                  <b>Setup</b>
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {/* Homeworks Table */}
      <h3>Homeworks</h3>
      <table className="homeworks-table">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Out:</th>
            <th>In:</th>
            <th>Late:</th>
          </tr>
        </thead>
        <tbody>
          {availableHomeworks.map((hw) => (
            <tr key={hw.title}>
              <td>
                {hw.link ? (
                  <a href={hw.link}>{hw.title}</a>
                ) : (
                  <span>{hw.title}</span>
                )}
              </td>
              <td>{formatDate(hw.out, date_formatting_2)}</td>
              <td>{formatDate(hw.due, date_formatting)}</td>
              <td>{formatDate(hw.late, date_formatting)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Labs Table */}
      <h3>Labs</h3>
      <table className="labs-table">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Out:</th>
            <th>Slides:</th>
          </tr>
        </thead>
        <tbody>
          {availableLabs.map((lab) => (
            <tr key={lab.title}>
              <td>
                {lab.link ? (
                  <a href={lab.link}>{lab.title}</a>
                ) : (
                  <span>{lab.title}</span>
                )}
              </td>
              <td>{formatDate(lab.out, date_formatting_2)}</td>
              <td>{lab.slide ? <a href={lab.slide}>Slides</a> : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Projects Table */}
      <h3>Projects</h3>
      <table className="projects-table">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Out:</th>
            <th>In:</th>
            <th>Late:</th>
            <th>Source:</th>
          </tr>
        </thead>
        <tbody>
          {availableProjects.map((proj) => (
            <tr key={proj.title}>
              <td>
                {proj.link ? (
                  <a href={proj.link}>{proj.title}</a>
                ) : (
                  <span>{proj.title}</span>
                )}
              </td>
              <td>{formatDate(proj.out, date_formatting_2)}</td>
              <td>{formatDate(proj.due, date_formatting)}</td>
              <td>{formatDate(proj.late, date_formatting)}</td>
              <td>{proj.gearup ? <a href={proj.gearup}>Gearup</a> : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
