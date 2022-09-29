import React from "react";
import Split from "react-split";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import {nanoid} from 'nanoid'

export default function App() {    
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem('notes')) || []
    )
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ''
    )

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    })

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: '#Type your note here'
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        setNotes(prevNotes => {
            const newArray =[]

            for (let i = 0; i < prevNotes.length; i++) {
                const note = prevNotes[i]
                if (note.id === currentNoteId) {
                    newArray.unshift({...note, body: text})
                } else {
                    newArray.push(note)
                }
            }
            return newArray
        })
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    function deleteNote() {
        setNotes(oldNotes => oldNotes.filter(note => note.id !== currentNoteId))
    }

    return (
        <main>
            {
                notes.length > 0 
                ?
                <Split 
                    sizes={[30, 70]} 
                    direction="horizontal" 
                    className="split"
                >
                    <Sidebar 
                        notes={notes}
                        currentNote={findCurrentNote()}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNewNote}
                        deleteNote={deleteNote}
                    />
                    {
                        currentNoteId &&
                        notes.length > 0 &&
                        <Editor 
                            currentNote={findCurrentNote()}
                            updateNote={updateNote}
                        />
                    }
                </Split>
                :
                
                <div className="no-notes">
                
                    <h1>You have no notes</h1>
                
                    <button 
                        onClick={createNewNote}
                        className='first-note'
                    >
                        Create new note
                    </button>
                
                </div>
            }
        </main>
    )
}



