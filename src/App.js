import './App.css';
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";


function App() {
  return (
    <HashRouter>
      <Route path="/" component={Home}/>
      <Route path="/type/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
