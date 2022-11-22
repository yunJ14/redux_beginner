import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const PLUS = "PLUS";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

plus.addEventListener("click", () => {
  countStore.dispatch({ type: PLUS });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});

number.innerText = 0;
countStore.subscribe(() => {
  number.innerText = countStore.getState();
});
