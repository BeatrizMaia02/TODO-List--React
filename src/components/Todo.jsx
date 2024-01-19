import React from "react";
const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" 
    style={{textDecoration: todo.isCompleted? "line-through": ""}}>
      <div className="content">
        <p className="text">{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="concluir" onClick={() => completeTodo(todo.id)}>
          Concluir
        </button>
        <button className="remover" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};
export default Todo;
