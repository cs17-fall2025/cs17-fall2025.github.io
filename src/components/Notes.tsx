import React, { useState, useEffect } from "react";

interface NoteData {
  date: string;
  slidesUrl?: string;
  notesUrl?: string;
}

const notesData: NoteData[] = [
  {
    date: "9/3: Welcome",
    slidesUrl: "hi.com",
    notesUrl: "hi.com",
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
                <a
                  href={note.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Slides
                </a>
              )}
            </td>
            <td>
              {note.notesUrl && (
                <a
                  href={note.notesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
        <div className="classes-container">
          <div className="recent-classes">
            <h3>Recent Classes</h3>
            {recentNotes.map((note, index) => (
              <a
                key={index}
                href={note.notesUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="class-box">
                  {note.date.replace(/:.*/, "")}:{" "}
                  {note.date.split(":")[1].trim()}
                </div>
              </a>
            ))}
          </div>
          <div className="upcoming-classes">
            <h3>Upcoming Classes</h3>
            {upcomingClasses.map((upcoming, index) => (
              <div key={index} className="class-box">
                {upcoming.date}
              </div>
            ))}
          </div>
        </div>
        <h3>Notes</h3>
        <NotesTable notes={notesData} />
      </div>
    </>
  );
};

export default NotesPage;
