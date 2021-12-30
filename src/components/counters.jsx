import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {

    blabla = () => {
        console.log('blabla');
    }

    render() {
        return (
        <div>
        
        <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">reset</button>
        {this.props.counters.map(counter => 
        <Counter 
            key={counter.id} //key is used internally by react
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
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