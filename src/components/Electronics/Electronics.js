import React from 'react'
import first from "../../assets/d7f85a1b-46e5-4d7f-8dd8-8f0522213178.jpg"
import second from "../../assets/92b522c7-4633-4de1-83c4-42fb4505e2a5.jpg"
import third from "../../assets/8bd67a58-6137-4743-a07a-08a030bc3cfc.jpg"
import fourth from "../../assets/897cafda-40fe-48cb-8bad-68004ed1a1f8.jpg"
import fifth from "../../assets/5db7c954-da22-4273-b5c1-31d752e8e5e8.jpg"
import Products from '../products/Products'

const electronicsData= [
    {
        name : "leather bag",
        img : first,
        price : 10,
    },
    {
        name : "black sneakers",
        img : second,
        price : 20,
    },
    {
        name : "flashy bag",
        img : third,
        price : 30,
    },
    {
        name : "cream leather bag",
        img : fourth,
        price : 40,
    },
    {
        name : "cool sneakers",
        img : fifth,
        price : 50,
    }
]

const Electronics = () => {
    return (
        <div>
            <Products products={electronicsData}/>
        </div>
    )
}

export default Electronics
