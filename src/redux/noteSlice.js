import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    notes: []
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action) => {
            if(!action.payload.title || /^\s*$/.test(action.payload.title)) return;
            if(!action.payload.text || /^\s*$/.test(action.payload.text)) return;
            state.notes.push(action.payload)
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },
        updateNote: (state, action) => {
            if(!action.payload.value.title || /^\s*$/.test(action.payload.value.title)) return        
            if(!action.payload.value.text || /^\s*$/.test(action.payload.value.text)) return
            state.notes = state.notes.map(item => (item.id === action.payload.id ? action.payload.value : item))
        }
    }
})

export const {addNote, removeNote, updateNote} = noteSlice.actions;
export default noteSlice.reducer;