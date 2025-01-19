import React, { Component, useState } from "react";
import generateNumbers from "../../data/GenerateNumbers";

const MegaSena = () => {

    const [quantity, setQuantity] = useState(6);
    const [numbers, setNumbers] = useState([]);
    let stringNumbers = numbers.toString();

    function updateValues() {
        setNumbers(generateNumbers(quantity))
        stringNumbers = numbers.toString();
    }

    function whenChange(event) {
        setQuantity(event.target.value);
    }

    return (
        <div>
            <h2>Mega Sena</h2>
            <p>How many numbers?</p>
            <input type="number" max="12" min="1" value={quantity} onChange={whenChange} />
            <button onClick={() => updateValues()}>Generate</button>
            <p>{stringNumbers.split(',').join(', ')}</p>
        </div>
    );
}

export default MegaSena;