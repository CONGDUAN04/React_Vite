const ToDoData = (props) => {
  //props là một biến object
  // {
  //   name :"Duan",
  //   age : 25,
  //   data: {}
  // }
  const { name, age, data } = props;
  //==> const name = props.name;
  console.log(">>>check props:", props);
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>Learning React</div>
      <div>Watching YouTuBe</div>
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};
export default ToDoData;
