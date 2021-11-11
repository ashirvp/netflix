import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Money Heist</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="discription">Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
