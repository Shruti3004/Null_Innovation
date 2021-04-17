import React from "react";
import { Route, Switch } from "react-router-dom"; 
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Admin from "./components/admin/Admin";
import Listing from "./components/listing/Listing";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route exact path="/list" component={Listing} />
      </Switch>
    </div>
  );
}

export default App;
