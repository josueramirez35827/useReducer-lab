import React, { useReducer } from "react";
import Reducer from "../reducers/Reducer";

const initialState = 0;

const Home = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function increment(value) {
    dispatch({ type: "ADD", payload: value })
  }

  function decrement(value) {
    dispatch({ type: "SUBTRACT", payload: value })
  }


  return (
    <div>
      <h1>This is my home page!</h1>
      <button onClick={() => increment(5)}>Increment</button>
      <button onClick={() => decrement(5)}>Decrement</button>
      <h1>{state}</h1>
    </div>
  )
};

export default Home;