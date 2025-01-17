import React from 'react';

const DirectChild = (props) => {
    return (
        <div>
            <>{props.name} - </>
            <>{props.age} - </>
            <>{props.geek ? 'Geek' : 'Not Geek'}!</>
        </div>
    );
};

export default DirectChild;
