import { useState } from "react";
import { useEffect } from "react";

export function NavBar() {
  return (
    <nav className="nav">
      <h1 className="nav1">
        <button className="navButton">Departments</button>
      </h1>
      <h1 className="nav2">
        <button className="navButton">Faculty</button>
      </h1>
      <h1 className="nav3">
        <button className="navButton">Login/Register Admin</button>
      </h1>
    </nav>
  );
}
