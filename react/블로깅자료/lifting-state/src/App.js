import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1)
  return (
    <div className='counters'>
      <Counter total={count} onClick={handleClick} />
      <Counter total={count} onClick={handleClick} />
    </div>
  );
}

export default App;

