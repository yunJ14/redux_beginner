import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD", function prepare(text) {
  return {
    payload: {
      text,
      id: Date.now(),
    },
  };
});
export const deleteToDo = createAction("DELETE");

const initialState = JSON.parse(localStorage.getItem("toDos"));

initialState || localStorage.setItem("toDos", JSON.stringify([]));

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      const newState = { text: action.payload.text, id: action.payload.id };
      state && state.unshift(newState);
      localStorage.setItem("toDos", JSON.stringify(state));
    })
    .addCase(deleteToDo, (state, action) => {
      const deleteState = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem("toDos", JSON.stringify(deleteState));
      return deleteState;
    })
    .addDefaultCase((state, action) => state);
});

const store = configureStore({reducer});

export default store;
