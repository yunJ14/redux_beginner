import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
    id: Date.now(),
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

JSON.parse(localStorage.getItem("toDos")) ||
  localStorage.setItem("toDos", JSON.stringify([]));

const reducer = (state = JSON.parse(localStorage.getItem("toDos")), action) => {
  switch (action.type) {
    case ADD:
      const addState = [{ text: action.text, id: action.id }, ...state];
      localStorage.setItem("toDos", JSON.stringify(addState));
      return addState;
    case DELETE:
      const deleteState = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem("toDos", JSON.stringify(deleteState));
      return deleteState;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
