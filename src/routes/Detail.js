import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

const Detail = (props) => {
  const id = useParams();
  const toDo =
    props.toDos && props.toDos.find((toDo) => toDo.id === parseInt(id.id));
  return (
    <div>
      <h1>DETAIL</h1>
      <p>{toDo.text}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    toDos: state,
  };
};

export default connect(mapStateToProps)(Detail);
