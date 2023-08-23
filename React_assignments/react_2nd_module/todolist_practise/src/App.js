import logo from "./logo.svg";
import "./App.css";
import "./navbar.css"
import { TodoApp } from "./components/TodoApp";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link className="navbar-link" to="/todos">
                  Todo List
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="navbar-link" to="/add-todo">
                  Add Todo
                </Link>
              </li>
            </ul>
          </nav>
          <br />
          <br />

          <TodoApp />
        </div>
      </Router>
    </div>
  );
}

export default App;
