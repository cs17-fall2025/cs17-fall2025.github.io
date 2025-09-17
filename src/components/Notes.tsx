import React, { useState, useEffect } from "react";

interface NoteData {
  date: string;
  codeUrl?: string;
  slidesUrl?: string;
  notesUrl?: string;
}

const notesData: NoteData[] = [
  {
    date: "9/15: Recipe, Semantics, and Recursion",
    slidesUrl:
      "https://docs.google.com/presentation/d/1XPp__n7BJNsELL6d5RwjSDLciEE15Yb3/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
    notesUrl: "",
  },
  {
    date: "9/12: Rules and The Design Recipe",
    slidesUrl:
      "https://docs.google.com/presentation/d/1TgTRPRmHWY0Z3AADt_hd1A7oGSKXQieh/edit?usp=drive_link&ouid=106249266650853110385&rtpof=true&sd=true",
    notesUrl: "",
  },
  {
    date: "9/10: Expressions and Syntax",
    codeUrl:
      "https://drive.google.com/drive/folders/1U7aSlp3-CPQa6BRvc8txOGb1TDYoTNX8?usp=sharing",
    slidesUrl:
      "https://docs.google.com/presentation/d/1hM-8thr9Vi3XzLlJXT-vEUTbXBAVvgOc/edit?usp=drive_link&ouid=106249266650853110385&rtpof=true&sd=true",
    notesUrl: "",
  },
  {
    date: "9/8: Expressions and Syntax",
    slidesUrl:
      "https://docs.google.com/presentation/d/1zrfWZ3fd01EFiylujHc-822WVPLyVYIQ/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
    notesUrl: "",
  },
  {
    date: "9/5: Arithmetic, Types and Keywords",
    slidesUrl:
      "https://docs.google.com/presentation/d/16EAzqV9q47hqk7xdEWSGmU5amyF0lNQD/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
    notesUrl:
      "https://drive.google.com/file/d/1UCIceKkjEZU7-Agx_3AIwme01Iu4-sVn/view?usp=sharing",
  },
  {
    date: "9/3: Welcome",
    slidesUrl:
      "https://docs.google.com/presentation/d/1skloaze3krgpx2QEQ52PFPLN1YTjJSyX/edit?slide=id.p1#slide=id.p1",
    notesUrl: "",
  },
];

const NotesTable: React.FC<{ notes: NoteData[] }> = ({ notes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Slides</th>
          <th>Code</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note, index) => (
          <tr key={index}>
            <td>{note.date}</td>
            <td>
              {note.slidesUrl && (
                <a href={note.slidesUrl} target="_blank">
                  Slides
                </a>
              )}
            </td>
            <td>
              {note.codeUrl && (
                <a href={note.codeUrl} target="_blank">
                  Code
                </a>
              )}
            </td>
            <td>
              {note.notesUrl && (
                <a href={note.notesUrl} target="_blank">
                  Notes
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const NotesPage: React.FC = () => {
  const recentNotes = notesData.slice(-3).reverse();
  const upcomingClasses = [{ date: "9/6: TBA!" }];

  return (
    <>
      <div className="page-content">
        <h1>Notes</h1>
        <p>
          Lecture recordings can be found{" "}
          <b>
            <u>
              <a href="https://brown.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%22732825af-14e0-48cf-95bc-b34700f500d2%22">
                here
              </a>
            </u>
          </b>
          .
        </p>
        <p>
          The typed notes are adapted from past years and might not 100% match
          what was said in lecture.
        </p>
        <NotesTable notes={notesData} />
      </div>
    </>
  );
};

export default NotesPage;
