import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

const ToDo = (props) => {
  const dispatch = useDispatch();

  const onBtnClick = (id) => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${props.toDo.id}`}>{props.toDo.text}</Link>
      <button onClick={() => onBtnClick(props.toDo.id)}>DEL</button>
    </li>
  );
};

export default ToDo;
