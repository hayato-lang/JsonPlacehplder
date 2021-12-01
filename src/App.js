import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    })
  }
  const onClickUser1 = () => {}
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id1のuser</button>
    </div>
  );
}
