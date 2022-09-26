import React from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card"
import data from "./data"

export default function App() {
    let cards = data.map(item => {
        return (
            <Card 
                id={item.id}
                {...item}
            />
        )
    })

    return (
        <div>
            <NavBar />
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}