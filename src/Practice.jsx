import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import Loading from "./Loading";

const codeApi = "https://jsonplaceholder.typicode.com/todos";
console.log(codeApi);

function Practice({ data }) {
  console.log(data);
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [loading, setloding] = useState(true);

  function handlechange() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (count > 0) {
      document.title = `chats ${count}`;
    } else {
      document.title = `chats`;
    }
  }, [count]);

  useEffect(() => {
    async function getapi() {
      try {
        setloding(false);
        const response = await axios.get(codeApi);
        setApiData(response.data);
      } catch (error) {
        setloding(false);
        console.log(error);
      }
    }
    getapi();
  }, []);

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  const [width, setwidth] = useState(window.screen.width);

  const actualWidth = () => {
    setwidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h2>useEffect Practice {count}</h2>

      <button onClick={handlechange}>clickme</button>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          filter: "drop-shadow(2px, 4px, 6px, black)",
        }}
      >
        <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
          <div
            style={{
              backgroundColor: "blueviolet",
              height: 250,
              width: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>faizan</h1>
          </div>
        </Tilt>
      </div>

      <p>the actual size of window is</p>
      <p>{width}</p>

      {apiData.map((e) => (
        <div key={e.id}>
          <p>{e.title}</p>
        </div>
      ))}
    </>
  );
}

export default Practice;
