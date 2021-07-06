import React, {useState} from 'react'
import NotesForm from './NotesForm'
import {useDispatch} from 'react-redux';
import {removeNote, updateNote} from './redux/noteSlice';

const Note = ({id, title, text}) => {
    const dispatch = useDispatch(); 
    const [edit, setEdit] = useState({id:null, title:'', text: ''})

    const submitUpdate = value => {
        dispatch(updateNote({id, value}))
        setEdit({id: null, title: '', text: ''})
    }

    if (edit.id) {
        return <NotesForm edit={edit} editNote={submitUpdate} />
    }

    return (
            <div className='note-list-container'>
                <div className='note-content'>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <div className='note-buttons'>
                  <button onClick={() => setEdit({id, title, text})} className='btn btn-edit'>Edit</button>
                  <button onClick={() => dispatch(removeNote(id))} className='btn btn-remove'>X</button>
                </div>
              </div>
    )
}

export default Note
