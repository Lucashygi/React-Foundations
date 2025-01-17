import React from 'react';

const IndirectChild = (props) => {
    const callback = props.whenClicked || (() => {});
    const min = 50;
    const max = 70;
    const generateAge = () => parseInt(Math.random() * (max - min)) + min;
    const generateGeek = () => Math.random() > 0.5;
    return (
        <div>
            <div>Son</div>
            <button
                onClick={(_) => callback('John', generateAge(), generateGeek())}
            >
                Provide Information
            </button>
        </div>
    );
};

export default IndirectChild;
