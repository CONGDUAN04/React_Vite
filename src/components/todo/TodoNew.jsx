const TodoNew = (props) => {
  console.log(">>>check point:", props);
  const { addNewToDo } = props;
  // addNewToDo();
  const handleClick = () => {
    alert("click me");
  };
  const handOnChange = (name) => {
    console.log(">> handleOnChange", name);
  };
  return (
    <div className="todo-new">
      <input
        type="Text"
        onChange={(event) => handOnChange(event.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
export default TodoNew;
