import "./input.css";
import React, { useState } from "react";

const Input = () => {
    const [value, setValue] = useState("Change me");

    function whenChanged(event) {
        setValue(event.target.value);
    }

    return (
        <div className="Input">
            <h2>{value}</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input type="text" value={value} onChange={whenChanged} />
                <input type="text" value="Read only" readOnly />
                <input defaultValue="" placeholder="Uncontrolled" />
            </div>
        </div>
    );
};

export default Input;