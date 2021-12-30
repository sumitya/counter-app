import React, { Component } from 'react';

class NavBar extends React.Component {
    render() { 
        return (
        <nav className="navbar navbar-light bg-light">
       <a className="narbar-brand" href="#">
         Narbar <span className="badge badge-pill badge-secondary">
           {this.props.totalCounters}
         </span>
       </a>
      </nav>
      );
    }
}
 
export default NavBar;