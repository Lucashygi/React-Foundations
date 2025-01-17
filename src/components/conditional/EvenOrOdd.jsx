import React from 'react';

const EvenOrOdd = (props) => {
    const isEven = props.number % 2 === 0;
    return (
        <div>
            Random Number {props.number} is:{' '}
            {isEven ? <span>Even</span> : <span>Odd</span>}
        </div>
    );
};

export default EvenOrOdd;
