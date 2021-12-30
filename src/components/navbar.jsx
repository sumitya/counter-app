import React, { Component } from 'react';

//Stateless Functional Component

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
   <a className="narbar-brand" href="#">
     Narbar{"" } <span className="badge badge-pill badge-secondary">
       {props.totalCounters}
     </span>
   </a>
  </nav>
  );
};
 
// cc -> shortcut for creating class 
// sfc -> shortcut for creating stateless functional component
export default NavBar;