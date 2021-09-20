import React from "react"


const Person = (props) => {
    const pStyle = {
        width : '400px',
        margin : '0 auto',
        border : '1px solid red',
        margin : '20px',
        padding : '20px',
    }
    return (
        <div style={pStyle}>
            <h1>Name : {props.name}</h1>
            <h1>Age : {props.age}</h1>
        </div>
    )
}


export default Person