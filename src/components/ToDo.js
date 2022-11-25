import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

const ToDo = (props) => {
  return (
    <li>
      <Link to={`/${props.toDo.id}`}>
        {props.toDo.text}
        <button onClick={props.onBtnClick}>DEL</button>
      </Link>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(deleteToDo(ownProps.toDo.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
