import "./components/todo/todo.css";
import ToDoData from "./components/todo/TodoData";
import "./components/todo/TodoNew";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
const App = () => {
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
      <ToDoData name={hoidanit} age={age} data={data} />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};
export default App;
