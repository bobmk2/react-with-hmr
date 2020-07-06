import React from "react";
import { hot } from "react-hot-loader";
import { Counter } from "./components/Counter";
const App = () => (
  <div>
    Hello World!
    <Counter />
  </div>
);
export default hot(module)(App);
