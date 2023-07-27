import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import RestorantUpdate from "./components/RestorantUpdate";
import RestorantEdit from "./components/RestorantEdit";
import Restorantdelete from "./components/Restorantdelete";
import RestorantList from "./components/RestorantList";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1>Resterant App</h1>
      <Router>
        <ul>
          <li>
            {" "}
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/delete">Delete</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/edit" element={<RestorantEdit />}></Route>

          <Route path="/list" element={<RestorantList />}>
            {" "}
          </Route>
          <Route path="/delete" element={<Restorantdelete />}></Route>
          <Route path="/update" element={<RestorantUpdate />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
