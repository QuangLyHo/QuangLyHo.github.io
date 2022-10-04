import React from "react";

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => {
        return (
            <div key={note.id}>
                <div
                    className={`title ${
                        note.id === props.currentNote.id ? 'selected-note' : ""
                    }`}
                    onClick={() => props.setCurrentNoteId(note.id)}
                    >
                        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                    <button 
                        className="delete-btn trash" 
                        onClick={(event => props.deleteNote(event, note.id))}
                    >
                        Trash
                    </button>
                </div>
            </div>
        )}
    )
    
    return (
        <div className="sidebar pane">
            <div className="sidebar--header">
                <h3 className="sidebar--title">Notes</h3>
                <button className="btn-add-notes" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </div>
    )
}