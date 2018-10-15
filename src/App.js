import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import MyNavBar from "./components/navbar";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <MyNavBar />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
