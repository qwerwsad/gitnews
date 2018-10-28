import React, { Component } from 'react';
class Childs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:"true"
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        if(this.props.onChange){
            this.props.onChange(event)
        }
        console.log(event);
        this.setState({
            value:event.target.value
        })
    }
    render(){
        return(
            <label >{this.props.name}
                <input type="radio" checked={this.state.value=='true'} value="true"  onChange={this.handleChange}/>"true"
                <input type="radio" checked={this.state.value=='false' } value="false" onChange={this.handleChange}/>"false"
            </label>
        )
    }
}
export default Childs;
