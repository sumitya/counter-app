import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import React,{Component} from 'react';
import Counters from "./components/counters";


// <React.Fragment> -> to wrap two (or more) elements as a root.
class App extends Component {
  render(){
    return (
      <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
        </main>
      </React.Fragment>
    );
  }
  
}

export default App;
