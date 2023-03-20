import React, { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  function handleAdd(event) {
    const value = event.target.value;
    setNote(value);
  }
  function onAdd() {
    setNotes((prev) => {
      return [...prev, note];
    });
    setNote("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleAdd} value={note} type="text" />
        <button onClick={onAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {notes.map((note) => {
            return <li>{note}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
