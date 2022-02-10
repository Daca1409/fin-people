import { NavBar } from "./components/NavBar";
import { Users } from "./components/Users";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from "./components/About";
// import { fetchData } from "./components/UsersService";
// da li treba da pozivam  fetchData u useEffectu za grid?
//mislim da ne zato sto ne zelim da kada se renderuje stranica prvi put da mi se pojave novi useri. zelim da vidim one stare sacuvane od malore.


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
    // setTimeout(() => { setLoading(true) }, 1.0 * 1000);
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
