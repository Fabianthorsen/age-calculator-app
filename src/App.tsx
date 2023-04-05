import { createSignal } from "solid-js";

function App() {
  const [getNum, setNum] = createSignal(0);
  return (
    <>
      <p>Hello World {getNum()}</p>
      <button onClick={() => setNum(getNum() + 1)}>+</button>
    </>
  );
}

export default App;
