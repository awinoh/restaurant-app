import React from "react";
import {v4 as uuid} from "uuid";

function NavBar() {
  const links = ["home", "about", "restaurants"];

  return <nav>
    {links.map((link, index)=> {
    return (
    <a key={uuid()}
    href={`#${link}`}>{link}</a> 
    )})}
    </nav>;
}

export default NavBar;

