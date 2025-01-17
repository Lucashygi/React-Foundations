import React from 'react';

const If = (props) => {
    const elseChild = props.children.filter((child) => {
        return child?.type?.name === 'Else';
    })[0];

    const ifChildren = props.children.filter((child) => {
        return child !== elseChild;
    });

    if (props.test) {
        return ifChildren;
    } else if (elseChild) {
        return elseChild;
    } else {
        return null;
    }
};

export const Else = ({ children }) => children;

export default If;
