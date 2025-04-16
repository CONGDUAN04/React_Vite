import "./components/todo/todo.css";
import ToDoData from "./components/todo/TodoData";
import "./components/todo/TodoNew";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  const [todoList, setTodos] = useState([
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
    alert(`call me ${name}`);
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
