import React from "react";

const Footer = () => {
    return <footer>
        {new Date.now().toLocaleTimeString()}. We're currently open
    </footer>
}

export default Footer;