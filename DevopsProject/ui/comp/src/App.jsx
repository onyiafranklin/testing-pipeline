import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  
  const getNoteList = () => {

    fetch("http://ec2-52-91-78-120.compute-1.amazonaws.com:8000/notepad",)
    .then(response => response.json())
    .then(result => {
      setNotes(result);
      setActiveNote(false);
    })
    .catch(error => console.log('error', error));
  };

  useEffect(() => {
    getNoteList();
  },[]);

  const onAddNote = () => {
    const newNote = {
      NoteId: 'NEW',
      Title: "",
      NoteDescription: "",
    };
    setActiveNote(newNote);
  };

  const onDeleteNote = (noteId) => {
    console.log('delete', noteId);
    setNotes(notes.filter(({ NoteId }) => NoteId !== noteId));
  };

 const createNote = (updatedNote,RestType) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify(updatedNote);
  
  var requestOptions = {
    method: RestType,
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://ec2-52-91-78-120.compute-1.amazonaws.com:8000/notepad", requestOptions)
    .then(response => response.text())
    .then(result => getNoteList())
    .catch(error => console.log('error', error));
 }

  const onUpdateNote = (updatedNote) => {
    console.log('update', updatedNote.NoteId);
    if (updatedNote.NoteId == "NEW"){
      updatedNote.NoteId = uuid();
      createNote(updatedNote,'POST');
    }
    else{
      createNote(updatedNote,'PUT');
    }

    // need to make post API

    // After API success getNoteList(); setActiveNote(null);
    // setNotes([updatedNote, ...notes]);
    // setActiveNote(false);
  };

  const onEditNote = (editNoteId) => {
    console.log('edited', editNoteId);
    setActiveNote(notes.find(({ NoteId }) => NoteId === editNoteId))
  }

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        onEditNote={onEditNote}
      />
      <Main activeNote={activeNote} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
