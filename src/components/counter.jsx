import React, { Component } from "react";

class Counter extends React.Component {

    /*constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    state = {
        value: this.props.counter.value
        //tags:['']
    };

    styles = {
        fontSize:50,
        fontWeight:"bold"
    };
   
    render() {
    
        console.log('props',this.props);

        return (
            <div>
                {this.props.children}
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={ () => this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
   
    }
   // method = () = {} , is a way to call constructor, known as arraw notation
   

    handleIncrement = product => {
        console.log(product);
        this.setState({value: this.state.value + 1});

    }

    renderTags() {
       return <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value } = this.state;
        return value === 0 ? "0" : value;
    }
}
 
export default Counter;