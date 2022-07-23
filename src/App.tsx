import React, { useCallback, useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import CleanUp from "./CleanUp";

const App: React.FC = () => {
  const [status, setStatus] = useState<string | number>("text");
  const [input, setInput] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const [display, setDisplay] = useState<boolean>(true);

  const onChengeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // useEffectで第二引数をどうするかで実行タイミングを決められる。
  // 何もない場合、useStateの更新があるたびに実行される
  // []のからの場合、初回の一回だけ更新される
  // 値を入れた場合、肺あtが変更されたときに実行される
  useEffect(() => {
    console.log("useEffect in App invoked !");
    document.title = `current value is ${counter}`;
  }, [counter]);
  return (
    <div className="App">
      <header className="App-header">
        <h4>{status}</h4>
        <button onClick={() => setStatus("new text")}>Button</button>
        <h4>{input}</h4>
        <input type="text" value={input} onChange={onChengeHandler} />
        <h4>{counter}</h4>
        <button onClick={() => setCounter((preCounter) => preCounter + 1)}>
          Increment
        </button>
        {display && <CleanUp />}
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

export default App;
