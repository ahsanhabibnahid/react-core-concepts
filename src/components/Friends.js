import React from 'react'
import Products from './Products';

function Friends(props){
    const {name, age, skill} = props.friend
    console.log()
    return (
        <div>
            <h5>Name : {name}</h5>
            <p>Age : {age}</p>
            <p>Skill : {skill}</p>
        </div>
    );
}



export default Friends