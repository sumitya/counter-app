import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {

    state = {
        counters: [
            {id:1, values:1},
            {id:2, values:0},
            {id:3, values:0},
            {id:4, values:0}
        ]

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
        {this.state.counters.map(counter => 
        <Counter 
            key={counter.id} //key i used internally by react
            counter={counter}
            onDelete={this.handleDelete}
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