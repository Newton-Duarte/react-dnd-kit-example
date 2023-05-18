import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id
  });
  const style = {
    color: isOver ? "green" : undefined,
    border: "1px solid red",
    borderStyle: isOver ? "dashed" : "inherit",
    borderColor: isOver ? "green" : "inherit",
    width: "100px",
    height: "100px",
    display: "inline-block"
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
