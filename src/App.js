import React, {useState} from 'react'
import NotesForm from './NotesForm'
import NotesList from './NotesList'
import './App.css'

const App =() => {
    const [notes, setNotes] = useState([])

    const addNote = note => {
        if(!note.title || /^\s*$/.test(note.title)) return
        if(!note.text || /^\s*$/.test(note.text)) return
        setNotes([...notes, note])
    }
    
    const removeNote = id => {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }

    const updateNote = (id, newNote) => {
        if(!newNote.text || /^\s*$/.test(newNote.text)) return
        setNotes(prev => prev.map(item => (item.id === id ? newNote : item)))
    }

    return (
        <div className='app-container'>
            <h1 className='app-title'>Note Taking App</h1>
            <NotesForm onSubmit={addNote} />
            {notes.length === 0 ? <h3>No Notes</h3> : <NotesList updateNote={updateNote} removeNote={removeNote} notes={notes} />}
        </div>
    )
}

export default App