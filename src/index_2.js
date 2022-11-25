import { createStore } from "redux";

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

//action creators
const addToDo = (text) => {
  return {
    type: ADD,
    id: Date.now(),
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const toDoModify = (toDo = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...toDo];
    case DELETE:
      return toDo.filter(data => data.id !== Number(action.id));
    default:
      return toDo;
  }
};

const toDoStore = createStore(toDoModify);

const dispatchAddToDo = (text) => {
  toDoStore.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  toDoStore.dispatch(deleteToDo(id));
};

const paintToDo = () => {
  const toDos = toDoStore.getState();
  ul.innerHTML = "";
  toDos.forEach((data) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", dispatchDeleteToDo);
    btn.innerText = "DELETE";
    li.innerText = data.text;
    li.id = data.id;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

toDoStore.subscribe(paintToDo);

const handleAddClick = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

button.addEventListener("click", handleAddClick);
