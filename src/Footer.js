import React from "react";

const Footer = () => {
    const openHour = 8;
    const closeHour = 23;
    const currentTime = new Date().getHours()
    const isOpen = currentTime >= openHour && currentTime <= closeHour;
    console.log(isOpen);
    return <footer>
        {new Date().toLocaleTimeString()}. We're currently open
    </footer>
}

export default Footer;