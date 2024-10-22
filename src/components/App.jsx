import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { NavBar } from "./NavBar.jsx";
import { Body } from "./Body.jsx";

function App() {
  const [login, setLogin] = useState(false);
  const [depts, setDepts] = useState([]);
  const [faculty, setFaculty] = useState([]);
  return (
    <>
      <NavBar />
      <Body login={login} setLogin={setLogin} />
    </>
  );
}

export default App;
