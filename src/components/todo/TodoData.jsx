const ToDoData = (props) => {
  //props là một biến object
  // {
  //   name :"Duan",
  //   age : 25,
  //   data: {}
  // }
  const { todoList, deleteTodo } = props;
  //==> const name = props.name;
  const handleClick = (id) => {
    deleteTodo(id);
  };
  return (
    <div className="todo-data">
      {todoList.map((item) => {
        return (
          <div className={`todo-item`} key={item.id}>
            <div>{item.name}</div>
            <button
              onClick={() => handleClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ToDoData;
