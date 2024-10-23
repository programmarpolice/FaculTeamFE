import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { NavBar } from "./NavBar.jsx";
import { Body } from "./Body.jsx";
import { Footer } from "./Footer.jsx";
import { LoginPage } from "./LoginPage.jsx";

function App() {
  const [login, setLogin] = useState(false);
  const [depts, setDepts] = useState([]);
  const [faculty, setFaculty] = useState([]);
  return (
    <>
      <NavBar />
      <LoginPage />
      <Footer />
    </>
  );
}

export default App;
