import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () =>
    setCount(count + 1)

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const reset = () => {
    setCount(0)
  }

  const multiple = () => {
    setCount(count * 2)
  }

  const divideByThree = () => {
    return count % 3 === 0 ? setCount(count / 3) : count
  }

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => { if (count > 0) { setCount(previousCount => previousCount - 1) } }



  return (
    <>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={multiple}>x2</button>
        <button onClick={divideByThree}>3の倍数の時だけ割る</button>
      </div>
    </>
  );
}

export default App;
