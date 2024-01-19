import React from "react";
import { useState } from "react";

const TodoForm=({addTodo}) =>{

const [value, setValues] = useState("");
const [category, setCategory] = useState("");


const handleSubmit = (e) => {
  e.preventDefault();
  if(!value || !category) return;
  console.log(value, category);
    addTodo(value, category);
    setValues("");
    setCategory("");
};


  return (
    <div>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo-text"
          value={value}
          placeholder="Digite a tarefa"
          onChange={(e) => setValues(e.target.value)}
        />
        <select id="todo-category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Selecione">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
          <option value="Pessoal">Pessoal</option>
        </select>
        <button className="btn btn-primary">Criar</button>
      </form>
    </div>
  );
}

export default TodoForm;
