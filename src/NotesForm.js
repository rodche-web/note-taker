import React, {useState} from 'react'

const NotesForm = ({edit, onSubmit}) => {
    const [title, setTitle] = useState(edit ? edit.title : '')
    const [text, setText] = useState(edit ? edit.text: '')
    const idGen = () => Math.floor(Math.random()* 100000)

    const addTitle = e => setTitle(e.target.value)
    const addText = e => setText(e.target.value)
    const addNote = e => {
        e.preventDefault()
        onSubmit({id: idGen(), title, text})
        setTitle('')
        setText('')
    }
    return (
        <form onSubmit={addNote} className='app-form'>
            <input name='title' value={title} onChange={addTitle} placeholder='Add title' />
            <textarea name='text' value={text} onChange={addText} rows='4' cols='50' placeholder='Add a note' />
            {edit ? (<input type='submit' value='Update' />) : (<input type='submit' value='Add Note' />)}
        </form>
    )
}

export default NotesForm
