import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Note from "./Note";
import SignUp from "./SignUp";

function App() {
  // React hook
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // Spread operator
    // console.log("newNote", newNote);
    setNotes([...notes, newNote]);
  }
  function deleteNote(id) {
    // arrow functions
    setNotes((prev) => prev.filter((x) => x.id !== id));
  }
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/note"
            element={
              <>
                <CreateArea addNote={addNote} />
                {notes.map((x) => (
                  <Note
                    key={x.id}
                    title={x.title}
                    content={x.content}
                    id={x.id}
                    delete={deleteNote}
                    color={x.color}
                  />
                ))}
              </>
            }
          />
          <Route path="/signup" element={<SignUp />} />{" "}
          <Route path="/" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
