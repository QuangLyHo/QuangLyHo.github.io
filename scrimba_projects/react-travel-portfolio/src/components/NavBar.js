import React from "react";
import headerIcon from "../images/headerIcon.svg"

export default function NavBar() {
    return (
        <header>
            <div>
                <img src={headerIcon} alt="header logo" />
            </div>
            <div className="header--title">my travel journal.</div>
        </header>
    )
}