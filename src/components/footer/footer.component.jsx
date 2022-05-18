import React from 'react'
import "./footer.styles.scss";

const Footer = () => {

    return (
        <div>
            <div className='footer-upper'>
                <div className='footer-titles'>
                    <h1>10 Besy New York insurance rates</h1>
                    <h2>Find & compare your best rates in 2 minutes</h2>
                </div>
                <div className='footer-search'>
                    <p>Enter Zip code</p>
                </div>
                <div className='footer-search-button'>
                    <p> Get Your Questes</p>
                </div>
            </div>
            <div className='footer'>
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

export default Footer