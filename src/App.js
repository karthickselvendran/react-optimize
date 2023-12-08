import React, { useCallback, useState } from "react";
import { Header } from "./header";
import { CountComponent } from "./countComponent";
import { CartComponent } from "./cartComponent";
import "./App.css";

const users = [
  {
    id: 1,
    name: "Test1",
  },
  {
    id: 2,
    name: "Test2",
  },
  {
    id: 3,
    name: "Test3",
  },
];

const findUsers = (id) => {
  // for (let i = 0; i <= 100000; i++) {
  //   console.log(i);
  // }
  return users.find((user) => user.id === id);
};

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const increment = useCallback(() => {
    console.log("increment func firing--");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const addToCart = useCallback(() => {
    console.log("addToCart func firing--");
    setCart((prevCart) => prevCart + 1);
  }, []);

  // const selectedUser = { name: "one" };
  const selectedUser = findUsers(1);

  return (
    <div className="App">
      <Header />
      <h1>
        <u>memo, useCallback, useMemo Example</u>{" "}
      </h1>
      <CountComponent count={count} increment={increment} />
      <hr />
      <CartComponent cart={cart} addToCart={addToCart} />
      <hr />
      <h3>Selected Username: {selectedUser.name}</h3>
    </div>
  );
}

export default App;
