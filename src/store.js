import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("toDos"));

initialState || localStorage.setItem("toDos", JSON.stringify([]));

const toDos = createSlice({
  name: "toDosReducer",
  initialState,
  reducers: {
    addToDo: {
      reducer: (state, action) => {
        const newState = { text: action.payload.text, id: action.payload.id };
        current(state) && state.unshift(newState);
        localStorage.setItem("toDos", JSON.stringify(state));
      },
      prepare: (text) => {
        return { payload: { text, id: Date.now() } };
      },
    },
    deleteToDo: (state, action) => {
      const deleteState = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem("toDos", JSON.stringify(deleteState));
      return deleteState;
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { addToDo, deleteToDo } = toDos.actions;

export default store;
