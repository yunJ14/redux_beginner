import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";

const Home = (props) => {
  const [text, setText] = useState("");

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  };

  return (
    <div>
      <h1>TO DO🎉</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="write your todo"
        />
        <button>ADD</button>
      </form>
      <ul>
        {toDos && toDos.map((toDo) => <ToDo key={toDo.id} toDo={toDo} />)}
      </ul>
    </div>
  );
};

export default Home;
