import React from 'react'
import Note from './Note'

const NotesList = ({notes}) => {
    return (
        <>
          {notes.map(note => (
            <Note {...note} key={note.id} />
          ))}  
        </>
    )
}

export default NotesList
