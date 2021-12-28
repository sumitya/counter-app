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

    render() { 
        return (
        <div>
        {this.state.counters.map(counter => 
        <Counter 
            key={counter.id} 
            value={counter.values} 
            selected={true}
        />
       
       )}
        </div>
        );
    }
}
 
export default Counters;