import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

export const NotFound =()=>{
    return(
        <>
        <div className="not-container">
  <aside><img className="aside" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404 Image" />
  </aside>
  <main>
    <h1>Sorry!</h1>
    <p>
      PAGE NOT FOUND!!<br/>Click button below to go back to home page
    </p>
    <Link to="/" className="home-btn">
    <button className='home-btn' >click here </button></Link>
  </main>
</div>
        </>
    )
}
