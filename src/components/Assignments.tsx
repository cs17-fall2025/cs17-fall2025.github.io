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
  // {
  //   /* update handout */
  //   title: "Lab 11: Sort",
  //   out: new Date("10 Nov 2025 14:00:00 EST"),
  //   due: new Date("17 Nov 2025 13:59:00 EST"),
  //   link: "#",
  //   slide: "#",
  //   source: "#",
  // },
  // {
  //   /* update handout */
  //   title: "Lab 10: Game",
  //   out: new Date("3 Nov 2025 14:00:00 EST"),
  //   due: new Date("10 Nov 2025 13:59:00 EST"),
  //   link: "",
  //   slide: "",
  //   source: "",
  // },
  // {
  //   /* update handout */
  //   title: "Lab 9: ADTs",
  //   out: new Date("27 Oct 2025 14:00:00 EST"),
  //   due: new Date("3 Nov 2025 13:59:00 EST"),
  //   link: "",
  //   slide: "",
  //   source: "",
  // },
  // {
  //   /* update handout */
  //   title: "Lab 8: Environments",
  //   out: new Date("20 Oct 2025 14:00:00 EST"),
  //   due: new Date("27 Oct 2025 13:59:00 EST"),
  //   link: "",
  //   slide: "",
  //   source: "",
  // },
  // {
  //   /* update handout */
  //   title: "Lab 7: Debugging",
  //   out: new Date("13 Oct 2025 14:00:00 EST"),
  //   due: new Date("20 Oct 2025 13:59:00 EST"),
  //   link: "",
  //   slide: "",
  //   source: "",
  // },
  {
    title: "Lab 6: Reason",
    out: new Date("14 Oct 2025 10:00:00 EST"),
    due: new Date("19 Oct 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1_9-CfEE5Dw636lwzDDWXPqNNTt_33wWz/view?usp=sharing",
    slide:
      "https://docs.google.com/presentation/d/11VRY5cqT9Tw_sQZ887d37fQt46tK2lWS2SlZq-UoqNc/edit?usp=sharing",
    source: "",
  },
  {
    title: "Lab 5: Search",
    out: new Date("Oct 5 2025 10:00:00 EST"),
    due: new Date("12 Oct 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1nbc-l52U88lm4OZbXR5tX2D5Ul-iQ1Y7/view?usp=sharing",
    slide:
      "https://docs.google.com/presentation/d/1oL_kiXvmxGCzYnYttOwPVcIMIJrpj32TrROf2xk53Ug/edit?usp=sharing",
    source: "",
  },
  {
    title: "Lab 4: Natural Numbers",
    out: new Date("28 Sep 2025 10:00:00 EST"),
    due: new Date("5 Oct 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1keIbfofd1Mzuw8Ru7POeyVVMC9is1QBj/view?usp=sharing",
    slide:
      "https://docs.google.com/presentation/d/1TCsXJMjFEDsubgDGIVq4OrLoq1VirM9qwWLNhEuWlfE/edit?usp=drive_link",
    source: "",
  },
  {
    title: "Lab 3: Recursion",
    out: new Date("21 Sep 2025 10:00:00 EST"),
    due: new Date("28 Sep 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/18lx_6byViqggyd_8YKqj4hPove9jyVpc/view?usp=sharing",
    slide:
      "https://docs.google.com/presentation/d/18HaTBxZIB1HgJmTKsFuDqOI0vgtpNX52wEov-qSKn40/edit?usp=sharing",
    source: "",
  },
  {
    title: "Lab 2: Racket",
    out: new Date("14 Sep 2025 10:00:00 EST"),
    due: new Date("21 Sep 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1iAtPHGcI7lzA4IhFs2n8L4aOl8sMenhH/view?usp=sharing",
    slide:
      "https://docs.google.com/presentation/d/1mdpY2uANDq0BwJ0BqEyj8GdGSnHyGDiKuKyIvQozxVM/edit?usp=sharing",
    source:
      "https://drive.google.com/drive/folders/1DoCsSfjPFl7W6Uo6oIIld3BN86YYNcPw?usp=sharing",
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
  // {
  //   title: "HW 10: Game Tools",
  //   out: new Date("14 Nov 2025 12:00:00 EST"),
  //   due: new Date("20 Nov 2025 22:00:00 EST"),
  //   late: new Date("21 Nov 2025 22:00:00 EST"),
  //   link: "#",
  //   source: "#",
  // },
  // {
  //   title: "HW 9: Trees, Trees, ...and Lists",
  //   out: new Date("7 Nov 2025 12:00:00 EST"),
  //   due: new Date("13 Nov 2025 22:00:00 EST"),
  //   late: new Date("14 Nov 2025 22:00:00 EST"),
  //   link: "",
  //   source: "",
  // },
  // {
  //   title: "HW 8: ADTs",
  //   out: new Date("24 Oct 2025 12:00:00 EST"),
  //   due: new Date("30 Oct 2025 22:00:00 EST"),
  //   late: new Date("31 Oct 2025 22:00:00 EST"),
  //   link: "",
  //   source: "",
  // },
  {
    title: "HW 7: Rackettecita",
    out: new Date("16 Oct 2025 00:00:00 EST"),
    due: new Date("22 Oct 2025 22:00:00 EST"),
    late: new Date("24 Oct 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/11AXw3jU6HoE5wL5Lny4EMGsbOR6yR-An/view?usp=sharing",
    source:
      "https://drive.google.com/drive/folders/11sqyVh7cLpYZlYJpTfngIZKHRtvyXhyQ?usp=sharing",
  },
  {
    title: "HW 6: K-Subsets and Matrices",
    out: new Date("10 Oct 2025 00:00:00 EST"),
    due: new Date("16 Oct 2025 22:00:00 EST"),
    late: new Date("17 Oct 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1TA85-uqzhVflGYo7RNknBW0j1GyrLXeG/view?usp=sharing",
    source:
      "https://drive.google.com/drive/folders/1oQaMtlQYSCCjENPqc-vcit69oFtV9coq?usp=sharing",
  },
  {
    title: "HW 5: More HOPs and Subsets",
    out: new Date("1 Oct 2025 12:00:00 EST"),
    due: new Date("8 Oct 2025 22:00:00 EST"),
    late: new Date("9 Oct 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1PP4rPYuIaKn1epRATuvGSe5ch7A4rXJs/view?usp=sharing",
    source:
      "https://drive.google.com/file/d/1Aoomnm8OH86Kh__Nb5ci2yI0zgMD8QzA/view?usp=sharing",
  },
  {
    title: "HW 4: More Recursion",
    out: new Date("24 Sep 2025 12:00:00 EST"),
    due: new Date("1 Oct 2025 22:00:00 EST"),
    late: new Date("2 Oct 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1bd0l_CAuMCcT3HRlAF-Ctb8QGg8iQly_/view?usp=sharing",
    source: "",
  },
  {
    title: "HW 3b: Recursion, Part 2",
    out: new Date("17 Sep 2025 00:00:00 EST"),
    due: new Date("26 Sep 2025 22:00:00 EST"),
    late: new Date("27 Sep 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1UTkNBO__TBHD6egr-DFl6Y4B9EUnYMYe/view?usp=sharing",
    source: "",
  },
  {
    title: "HW 3a: Recursion, Part 1",
    out: new Date("17 Sep 2025 00:00:00 EST"),
    due: new Date("21 Sep 2025 22:00:00 EST"),
    late: new Date("22 Sep 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1UTkNBO__TBHD6egr-DFl6Y4B9EUnYMYe/view?usp=sharing",
    source: "",
  },
  {
    title: "HW 2: Procedures",
    out: new Date("11 Sep 2025 04:00:00 EST"),
    due: new Date("17 Sep 2025 22:00:00 EST"),
    late: new Date("18 Sep 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1W4Dww_G08uJsYgWnghPGYRfQTWv5RdBc/view?usp=sharing",
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
  // {
  //   title: "Game",
  //   out: new Date("11 Nov 2025 12:00:00 EST"),
  //   due: new Date("6 Dec 2025 22:00:00 EST"),
  //   late: new Date("7 Dec 2025 22:00:00 EST"),
  //   link: "#",
  //   source: "#",
  //   gearup: "#",
  // },
  // {
  //   title: "Rackette",
  //   out: new Date("24 Oct 2025 12:00:00 EST"),
  //   due: new Date("8 Nov 2025 22:00:00 EST"),
  //   late: new Date("9 Nov 2025 22:00:00 EST"),
  //   link: "",
  //   source: "",
  //   gearup: "",
  // },
  {
    title: "Bignum",
    out: new Date("18 Sep 2025 10:00:00 EST"),
    due: new Date("3 Oct 2025 22:00:00 EST"),
    late: new Date("4 Oct 2025 22:00:00 EST"),
    link: "https://drive.google.com/file/d/1Ml5oYO9_7IZFvjlXtUNLhLiUOKV6glVm/view?usp=sharing",
    source:
      "https://drive.google.com/drive/folders/1fDjATU9CkGl-fsib9vCBLPCTRzWCmGBz?usp=sharing",
    gearup:
      "https://drive.google.com/file/d/1sx_zfEcqHgY3cEUsEx9ZjL5Hh5y5ZWd4/view?usp=sharing",
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
                  <b>Gearup</b>
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
            <th>Setup:</th>
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
              <td>{hw.source ? <a href={hw.source}>Setup</a> : ""}</td>
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
            <th>Gearup:</th>
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
