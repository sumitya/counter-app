import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {

    blabla = () => {
        console.log('blabla');
    }

    render() {

        const {counters, onReset, onDelete, onIncrement } = this.props;
        return (
        <div>
        
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">reset</button>
        {counters.map(counter => 
        <Counter 
            key={counter.id} //key is used internally by react
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
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