import React from 'react';
import Member from './Member';

const Family = (props) => {
    const first = 'John';
    const second = 'Jane';
    const third = 'Jim';
    return (
        <div>
            <Member name={first} lastName={props.lastName} />
            <Member name={second} {...props} />
            <Member name={third} lastName={'Test'} />
        </div>
    );
};

export default Family;
