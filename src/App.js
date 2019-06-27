import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";

import store from "./app/store";

import Header from "./shared/components/Header";
import Jobs from "./Jobs/JobsContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-Wrapper">
            <Header />
            <Jobs />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
