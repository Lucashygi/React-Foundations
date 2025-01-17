import React, { cloneElement } from 'react';

const Family = (props) => {
    return (
        <div>
            {/* {React.Children.map(props.children, (child) => {
                return cloneElement(child, { ...props });
            })} */}
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i });
            })}
        </div>
    );
};

export default Family;
