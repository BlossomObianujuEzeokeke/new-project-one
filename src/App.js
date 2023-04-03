import React, { Component } from "react";
import "./App.css";
import CounterClass from "./Component/CounterClass";
import HookCounter from "./Component/HookCounter";
import HookCounterTwo from "./Component/HookCounterTwo";
import HookCounterThree from "./Component/HookCounterThree";
import HookCounterFour from "./Component/HookCounterFour";
import IntervalHookCounter from "./Component/IntervalHookCounter";
import DataFetching from "./Component/DataFetching";

class App extends Component {
  render() {
    return (
      // <CounterClass />
      // <HookCounter />
      // <HookCounterTwo />
      // <HookCounterThree />
      // <HookCounterFour />
      // <IntervalHookCounter />
      <DataFetching />


    );
  }
}

export default App;
