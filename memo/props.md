import MyComponent from "./Component/MyComponent";
import "./App.css";
const App = () => {
  return(
    <div className="font">
    <MyComponent name="React"/>   //children값 없음

    <MyComponent>리액트</MyComponent>   //props값 없음

    <MyComponent name="세영">자식</MyComponent>   //둘다 있음
    </div>
  );
}

export default App;