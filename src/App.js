import Header from './Header';
import NotesForm from './NotesForm'
import NotesList from './NotesList'
import {useSelector} from 'react-redux';
import {removeNote, updateNote} from './redux/noteSlice';
import './App.css'

const App =() => {
    const notes = useSelector(state => state.notes.notes)

    return (
        <div className='app-container'>
            <Header />
            <NotesForm />
            {notes.length === 0 ? <h3>No Notes</h3> : <NotesList updateNote={updateNote} removeNote={removeNote} notes={notes} />}
        </div>
    )
}

export default App