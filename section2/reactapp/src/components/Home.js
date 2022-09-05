// 1. React components  are functions
// 2. Fuction name must be start with UpperCase letter/
// 3.Function should return atleast single JSX element.
// 4.Function should be exported .

import React from 'react';

import myimg from '../images/thankyou.gif';



const Home = () => {
  return (
    <div> 
        <h1 className='myclass' style={{ color: 'red', background:'yellow'}}>MY HOME PAGE </h1>
        <hr />
        <img src={myimg} alt="" />
    </div>
  )
}

export default Home;