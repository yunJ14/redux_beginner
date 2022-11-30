import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Detail = () => {
  const id = useParams();
  const toDos = useSelector((state) => state);
  const detailToDo = toDos && toDos.find((toDo) => toDo.id === parseInt(id.id));

  return (
    <div>
      <h1>DETAIL</h1>
      <p>{detailToDo.text}</p>
    </div>
  );
};

export default Detail;
