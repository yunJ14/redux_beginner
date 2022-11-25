import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";

const Home = (props) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.dAddToDo(text);
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
        {props.toDos &&
          props.toDos.map((toDo) => <ToDo toDo={toDo} key={toDo.id} />)}
      </ul>
    </div>
  );
};

//store.getState()와 같이 state 사용하기 위함
const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

//store.dispatch()와 같이 사용하기 위함
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dAddToDo: (text) => dispatch(addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
