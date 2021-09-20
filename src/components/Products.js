import React from 'react'

function Products(props){
    const productsStyle = {
        height: '200px',
        width: '200px',
        border: '1px solid gray',
        borderRadius: '5px',
        backgroundColor: 'gray',
        float: 'left',
        textAlign: 'center',
        margin: '10px'
    }
    const {name, price} = props.product
    return (

        <div style= {productsStyle}>
            <h3>{name}</h3>
            <h5>{price}</h5>
            <button>Buy Now</button>
        </div>
    );
}

export default Products