import React from 'react'
import "./product.css"

const Products = ({products}) => {
    console.log(products);
    return (
        <div className="products-container">
        <h2>Electronics 12</h2>
            {
                products.map(product => (
                    <div className="product">
                        <img src={product.img} alt=""/>
                        <div className="text">
                            <h6>{product.name}</h6>
                            <p>{product.price}</p>
                        </div>
                        <button onClick={() => console.log(product.name)}>Add +</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products
