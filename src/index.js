import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// const reducer = () => {};
// const store = createStore(reducer);

//naming
const countModifier = (count = 0, action) => {
  // console.log(count, action);
  if (action.type === "PLUS") return count + 1;
  else if (action.type === "MINUS") return count - 1;
  else return count;
};
const countStore = createStore(countModifier);

plus.addEventListener("click", ()=>{countStore.dispatch({type:"PLUS"})});
minus.addEventListener("click", ()=>{countStore.dispatch({type:"MINUS"})});

number.innerText = 0;
countStore.subscribe(()=>{number.innerText = countStore.getState()});