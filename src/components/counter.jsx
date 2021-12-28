import React, { Component } from "react";

class Counter extends React.Component {

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    state = {
        count: 0
        //tags:['']
    };

    styles = {
        fontSize:50,
        fontWeight:"bold"
    };
   
    render() {
    
        //console.log('props',this.props)
        return (
            <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={ () => this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        )
   
    }
   // method = () = {} , is a way to call constructor, known as arraw notation
   

    handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1});

    }

    renderTags() {
       return <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;