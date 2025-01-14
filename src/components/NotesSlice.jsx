import {createEntityAdapter,createSlice} from '@reduxjs/toolkit';


const notesEntity = createEntityAdapter({
  selectId: (note) => note.id
});


export const notesSlice = createSlice({
  name:"notes",
  initialState:notesEntity.getInitialState(),
  reducers : {
    addNote : notesEntity.addOne,
    removeNote : notesEntity.removeOne,
  }
});

export const noteSelectors = notesEntity.getSelectors((state) => state.notes);