import logo from "./logo.svg";
import "./App.css";
import "./navbar.css"
import { TodoApp } from "./components/TodoApp";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TodoApp />
      </Router>
    </div>
  );
}

export default App;
