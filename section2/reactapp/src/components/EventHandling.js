import React, { useState } from 'react'


const EventHandling = () => {

    const [count, setcount] = useState(1);

    let cartitem = 10;

    const handClick = () => {
        console.log('Clicked')

    }

    const addtocart = () => {
        cartitem++;
        console.log(cartitem);
    }
    const updatestate =() =>{

        setcount(count + 1);
    }


    return (
        <div className='container mt-5'>
            <h1 className='text-center display-4'> Event Handling</h1>
            <hr />
            <h4>Click Event</h4>
            <button className='btn btn-success' onClick={() => { alert('Nice you to clicked that button') }}> Click to see</button>
            <button className='btn btn-danger' onClick={handClick}>Another Click Event</button>


            <h4>State management</h4>
            <button className='btn btn-success' onClick={addtocart}>Add Item to Cart</button>
            <h1>{cartitem}</h1>

            <button className='btn btn-warning' onClick={updatestate}>Update State</button>
            <h1>{count}</h1>
        </div>
    )
}

export default EventHandling