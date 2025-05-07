import { useState } from "react";

const TodoNew = (props) => {
  //useState hook  //function update valueInput
  const [valueInput, setValueInput] = useState("eric ");
  const { addNewToDo } = props;
  // addNewToDo();
  const handleClick = () => {
    addNewToDo(valueInput);
    setValueInput("");
  };
  const handOnChange = (name) => {
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="Text"
        onChange={(event) => handOnChange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>My name input is = {valueInput} </div>
    </div>
  );
};
export default TodoNew;
