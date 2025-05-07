const ToDoData = (props) => {
  //props là một biến object
  // {
  //   name :"Duan",
  //   age : 25,
  //   data: {}
  // }
  const { todoList } = props;
  //==> const name = props.name;
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(">>>check map", item, index);
        return (
          <div className={`todo-item`}>
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default ToDoData;
