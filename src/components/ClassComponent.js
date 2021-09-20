import React,{Component} from "react";

class ClassComponent extends Component{
    render(props){
        return (
            <h1>I am From Class Component : {this.props.name}</h1>
        )
    }
}

export default ClassComponent