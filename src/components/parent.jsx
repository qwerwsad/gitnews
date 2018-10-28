import React, { Component } from 'react';
import Child from './child.jsx'
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: ['qwe', 'rty', 'uio'],
            value: ['true','true','true'],
            value1:'true',
            value2:'true',
            value3:'true'
        }
    }
    handelChange(event,name){
        this.setState({
            name:event.target.value
        })
    }
        render (){
            var Inputs=[];
            Inputs=this.state.name.map(function(value,index){
                return <Child key={index} onChange={this.handelChange.bind(this,'value'+(index+1))} name={this.state.name[index]} value={this.state.value[index]} />
            }.bind(this))
        return(
            <form action="">
                {Inputs}
            </form>
        )
    }
}
export default Parent;
