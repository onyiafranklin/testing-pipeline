import { useEffect, useState } from "react";

const Main = ({ activeNote, onUpdateNote }) => {
  console.log('---------------', activeNote, onUpdateNote);
  const [currentNote, setCurrentNote] = useState({});

  const onEditField = (field, value) => {
    setCurrentNote({
      ...currentNote,
      [field]: value,
    });
  };

  const onSubmit = () => {
    console.log(currentNote);
    onUpdateNote(currentNote);
  };

  useEffect(() => {
    if(activeNote) setCurrentNote(activeNote);
  }, [activeNote]);


  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={currentNote.Title}
          onChange={(e) => onEditField("Title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={currentNote.NoteDescription}
          onChange={(e) => onEditField("NoteDescription", e.target.value)}
        />
        <button onClick={onSubmit}>submit</button>
      </div>
    </div>
  );
};

export default Main;
