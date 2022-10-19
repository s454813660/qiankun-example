import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router basename="/react">
      <Link to="/">首页</Link>
      <Link to="/aboutReact">关于页面</Link>
      <Route
        path="/"
        exact
        render={() => {
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          );
        }}
      ></Route>
      <Route path="/aboutReact" render={() => <h1>我是关于页面</h1>}></Route>
    </Router>
  );
}

export default App;
