import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import React,{Component} from 'react';
import Counters from "./components/counters";


// <React.Fragment> -> to wrap two (or more) elements as a root.
class App extends Component {

  state = {
    counters: [
        {id:1, value:10},
        {id:2, value:20},
        {id:3, value:30},
        {id:4, value:40}
    ]

};

handleIncrement = counter => {
    
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({counters});
};

handleReset = () => {
    const counters = this.state.counters.map( c=> {
        c.value = 0;
        return c;
        });
        this.setState({counters: counters});
};

handleDelete = (counterId) => {
    console.log('Event Handler Called!',counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters:counters});
}

  render(){
    return (
      <React.Fragment>
      <NavBar 
      totalCounters={this.state.counters.filter(c=> c.value>0).length}/>
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        />
        </main>
      </React.Fragment>
    );
  }
  
}

export default App;
