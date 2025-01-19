import React from "react";

export default (props) => {
    return (
        <div>
            <input htmlFor="stepInput"
                type="number"
                value={props.step}
                onChange={e =>
                    props.setStep(+e.target.value)} />
        </div>
    );
};