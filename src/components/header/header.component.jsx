import React, { useEffect, useState } from 'react'
import "./header.styles.scss";


const Header = () => {



    return (
        <div>
            <div className='header-upper'>
                <div className='header-titles'>
                    <h1>10 Besy New York insurance rates</h1>
                    <h2>Find & compare your best rates in 2 minutes</h2>
                </div>
                <div className='header-search'>
                    <p>Enter Zip code</p>
                </div>
                <div className='header-search-button'>
                    <p> Get Your Questes</p>
                </div>
            </div>
            <div className='header'>
                <div>
                    <h1>Services</h1>
                </div>
                <div>
                    <h1>Company</h1>
                    <h2>Some data</h2>
                    <h2>Some data</h2>
                    <h2>Some data</h2>
                </div>
                <div>
                    <h1>Legal</h1>
                    <h2>Privacy Policy</h2>
                    <h2>Terms</h2>
                </div>
            </div>
        </div>
    )
}

export default Header