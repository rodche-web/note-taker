import React from 'react'
import Note from './Note'

const NotesList = ({notes, removeNote, updateNote}) => {
    return (
        <>
          {notes.map(note => (
            <Note removeNote={removeNote} updateNote={updateNote} {...note} />
          ))}  
        </>
    )
}

export default NotesList
