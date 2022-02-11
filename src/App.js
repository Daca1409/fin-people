import { NavBar } from "./components/NavBar";
import { Users } from "./components/Users";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from "./components/About";

function App() {
  const [grid, setGrid] = useState(true)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("loadedUsers"))
      setUsers(JSON.parse(localStorage.getItem("loadedUsers")));
  }, []);

  useEffect(() => {
    localStorage.setItem("loadedUsers", JSON.stringify(users));
    setLoading(false)

  }, [users]);


  useEffect(() => {
    setGrid(JSON.parse(localStorage.getItem("grid")));
  }, []);

  useEffect(() => {
    localStorage.setItem("grid", grid);
  }, [grid]);



  return (
    <Router>
      <div className="App">
        <NavBar grid={grid} setGrid={setGrid} setUsers={setUsers} setLoading={setLoading}></NavBar>
        <Switch>
          <Route exact path="/"> <Users grid={grid} users={users} loading={loading} ></Users></Route>
          <Route path="/about"> <About /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
