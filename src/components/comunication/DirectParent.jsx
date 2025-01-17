import React from 'react';
import DirectChild from './DirectChild';

const DirectParent = (props) => {
    return (
        <div>
            <DirectChild name="John" age={20} geek={true}></DirectChild>
            <DirectChild name="Stuart" age={17} geek={false}></DirectChild>
        </div>
    );
};

export default DirectParent;
