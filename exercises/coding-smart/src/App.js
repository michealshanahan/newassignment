import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component"
import EditTodo from "./components/edit-todo.component"
import TodosList from "./components/todos-list.component"

function App() {
  return (
    <Router>
      <div className= "container">
        
        <nav className="navbar navnar-expand-lg navbar-ligh bg-light">

        </nav>

        <Route path="/" exact component={ TodosList } />
        <Route path="/edit/:id" component={ EditTodo } />
        <Route path="/create" component={ CreateTodo } />
      </div>
    </Router>
  );
}

export default App;
