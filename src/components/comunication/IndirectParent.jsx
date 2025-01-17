import React, { useState } from 'react';
import IndirectChild from './IndirectChild';

const IndirectParent = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isGeek, setGeek] = useState(false);

    function sendInfo(name, age, isGeek) {
        setName(name);
        setAge(age);
        setGeek(isGeek);
        console.log(name, age, isGeek);
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span>{age} </span>
                <span>{isGeek ? 'Geek' : 'Not Geek'}</span>
            </div>
            <IndirectChild whenClicked={sendInfo} />
        </div>
    );
};

export default IndirectParent;
