import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h1> React Core Concepts 2</h1>
      <Friends />
      <Users />
      <Team />
      <Counter />

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        Third
      </button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
