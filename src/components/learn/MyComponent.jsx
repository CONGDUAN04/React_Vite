import "./style.css";
//() => { }
//Component = html + css + js
//const hoidanit = "Duan 1";// string
//const hoidanit = "25";// number
//const hoidanit = true;// boolean
//const hoidanit = undefined;
//const hoidanit = null;
const hoidanit = [1, 2, 3];
// const hoidanit = {
//   name: "hoidanit",
//   age: 25,
// };
const MyComponent = () => {
  return (
    <>
      <div>{JSON.stringify(hoidanit)} & Duan & hoidanit</div>
      <div>{console.log("ERIC")}</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        Child
      </div>
    </>
  );
};
export default MyComponent;
