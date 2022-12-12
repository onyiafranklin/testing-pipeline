const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  onEditNote
}) => {
  //const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  console.log("notessssssssssssssssssssssssssssssssssssssssss")
  console.log(notes)

  const sortedNotes = notes;

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note pad</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.length != 0 && sortedNotes.map(({ NoteId, Title, NoteDescription, UpdatedDate }, i) => (
          <div
            className={`app-sidebar-note ${NoteId === activeNote?.NoteId && 'active'} `}
            key={i}
          >
            <div className="sidebar-note-title">
              <strong>{Title}</strong>
              <div>
                <button onClick={() => onEditNote(NoteId)}>Edit</button>
                &nbsp;
                <button onClick={() => onDeleteNote(NoteId)}>Delete</button>
               </div> 
            </div>

            <p>{NoteDescription && NoteDescription.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {UpdatedDate && new Date(UpdatedDate).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
