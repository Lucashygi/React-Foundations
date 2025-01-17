import React from 'react';

const Member = (props) => {
    return (
        <div>
            {props.name} <strong>{props.lastName}</strong>
        </div>
    );
};

export default Member;
