import ToDoData from "./TodoData";
import TodoNew from "./TodoNew";
import "./todo.css";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React " },
    // { id: 2, name: "Watching YouTuBe " },
  ]);
  const addNewToDo = (name) => {
    const newTodo = {
      id: functionrandomIntFromInterval(1, 1000000),
      name: name,
    };
    setTodoList([todoList, newTodo]);
  };
  const functionrandomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewToDo={addNewToDo} />
      {todoList.length > 0 ? (
        <ToDoData todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )}
      {/* {todoList.length > 0 && <ToDoData todoList={todoList} />}
      {todoList.length === 0 && (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )} */}
    </div>
  );
};
export default TodoApp;
