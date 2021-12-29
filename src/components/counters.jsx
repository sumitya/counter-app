import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {

    state = {
        counters: [
            {id:1, value:10},
            {id:2, value:20},
            {id:3, value:30},
            {id:4, value:40}
        ]

    };

    handleIncrement = counter => {
        console.log(counter);
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

    blabla = () => {
        console.log('blabla');
    }

    render() {
        return (
        <div>
        
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">reset</button>
        {this.state.counters.map(counter => 
        <Counter 
            key={counter.id} //key is used internally by react
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            bla={this.blabla}
            
        >
        <h1> Counter #{counter.id}</h1>
        </Counter>
       
       )}
        </div>
        );
    }
}
 
export default Counters;