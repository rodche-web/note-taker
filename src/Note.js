import React, {useState} from 'react'
import NotesForm from './NotesForm'

const Note = ({id, title, text, removeNote, updateNote}) => {
    const [edit, setEdit] = useState({id:null, title:'', text: ''})

    const submitUpdate = value => {
        updateNote(id, value)
        setEdit({id: null, title: '', text: ''})
    }
    if (edit.id) {
        return <NotesForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
            <div className='note-list-container'>
                <div className='note-content'>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <div className='note-buttons'>
                  <button onClick={() => setEdit({id, title, text})}>Edit</button>
                  <button onClick={() => removeNote(id)}>X</button>
                </div>
              </div>
    )
}

export default Note
