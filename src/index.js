import { createStore } from "redux";

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const handleClick = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  create(toDo);
};

const create = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};

button.addEventListener("click", handleClick);
