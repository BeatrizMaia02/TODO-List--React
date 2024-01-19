import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      { id: Math.random(), text, category, isCompleted: false },
    ];s
    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    const newTodo = [...todos]
    const filteredTodos = newTodo.filter((todo) => todo.id !== id? todo : null);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodo = [...todos]
    const filteredTodos = newTodo.map((todo) => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    });
    setTodos(filteredTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
