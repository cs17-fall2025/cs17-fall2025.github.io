import React, { useState, useEffect } from "react";

interface NoteData {
  date: string;
  slidesUrl?: string;
  notesUrl?: string;
}

const notesData: NoteData[] = [
  {
    date: "9/3: Welcome",
    slidesUrl:
      "https://docs.google.com/presentation/d/1skloaze3krgpx2QEQ52PFPLN1YTjJSyX/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
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
        <NotesTable notes={notesData} />
      </div>
    </>
  );
};

export default NotesPage;
