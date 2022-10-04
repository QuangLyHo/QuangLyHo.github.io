import React from 'react'
import Sidebar from './components/Sidebar'
import Editer from './components/Editer'
import Split from 'react-split'
import { nanoid } from 'nanoid'

export default function App() {
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem('notes')) || []
    )
    
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ''
    )

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function addNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [ newNote, ...prevNotes ])
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = []

            for (let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if (oldNote.id === currentNoteId) {
                    newArray.unshift({...oldNote, body: text})
                } else {
                    newArray.push(oldNote)
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

    function deleteNote(event, noteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }

    return (
        <div>
            {  
                notes.length > 0
                ?         
                <Split
                    className='split container'
                    sizes={[30, 70]}
                    direction="horizontal"
                >
                    <Sidebar
                        notes={notes}
                        currentNote={findCurrentNote()}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={addNewNote}
                        deleteNote={deleteNote}
                    />
                    {
                        currentNoteId &&
                        notes.length > 0 &&
                        <Editer 
                            currentNote={findCurrentNote()}
                            updateNote={updateNote}
                        />
                    }      
                </Split>
                :
                <div className='no-notes'>
                    <h2>No notes</h2>
                    <button className='first-note' onClick={addNewNote}>Add notes!</button>
                </div>
            }
        </div>
    )
}
