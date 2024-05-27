import React from "react";

const Footer = () => {
    const openHour = 8;
    const closeHour = 23;
    const currentTime = new Date().getHours()
    const isOpen = currentTime >= openHour && currentTime <= closeHour;
    console.log(isOpen);
    return <footer className="footer">
        {isOpen ? (
            <div className="order">
                <p>We're open until {closeHour}:00. Come visit us or order online.</p>
                <button className="btn">Order</button>
            </div>
        ): <p>We will satisfy your need in the next working hours.</p>}
    </footer>
}

export default Footer;