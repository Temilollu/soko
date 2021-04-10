import React from 'react'
import first from "../../assets/d7f85a1b-46e5-4d7f-8dd8-8f0522213178.jpg"
import second from "../../assets/92b522c7-4633-4de1-83c4-42fb4505e2a5.jpg"
import third from "../../assets/8bd67a58-6137-4743-a07a-08a030bc3cfc.jpg"
import Products from '../products/Products'

const electronicsData= [
    {
        name : "leather bag",
        img : first,
        price : 10,
        id: 1
    },
    {
        name : "black sneakers",
        img : second,
        price : 10000,
        id: 2
    },
    {
        name : "flashy bag",
        img : third,
        price : 400,
        id:3
    },
]

const Electronics = () => {
    return (
        <div>
          <h2>Electronics (3)</h2>
            <Products products={electronicsData}/>
        </div>
    )
}

export default Electronics
