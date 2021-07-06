import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNote} from './redux/noteSlice';
import {v4 as uuidv4} from 'uuid';

const NotesForm = ({edit, editNote}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(edit ? edit.title : '')
    const [text, setText] = useState(edit ? edit.text: '')

    const addTitle = e => setTitle(e.target.value)
    const addText = e => setText(e.target.value)
    const add = e => {
        e.preventDefault()
        if (!edit) {
            dispatch(addNote({id: uuidv4(), title, text}))
        }
        if (edit) {
            editNote({id: uuidv4(), title, text})
        }
        setTitle('')
        setText('')
    }
    return (
        <form onSubmit={add} className='app-form'>
            <input name='title' value={title} onChange={addTitle} placeholder='Add title' />
            <textarea name='text' value={text} onChange={addText} rows='4' cols='50' placeholder='Add a note' />
            {edit ? (<button className='btn btn-submit'>Update</button>) : (<button className='btn btn-submit'>Add Note</button>)}
        </form>
    )
}

export default NotesForm
