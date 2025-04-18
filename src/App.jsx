import "./components/todo/todo.css";
import ToDoData from "./components/todo/TodoData";
import "./components/todo/TodoNew";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React " },
    { id: 2, name: "Watching YouTuBe " },
  ]);
  const hoidanit = "Duan";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "VietNam",
  };
  const addNewToDo = (name) => {
    const newTodo = {
      id: functionrandomIntFromInterval(1, 1000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };
  const functionrandomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewToDo={addNewToDo} />
      <ToDoData name={hoidanit} age={age} data={data} todoList={todoList} />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};
export default App;
