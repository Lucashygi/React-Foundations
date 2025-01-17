import React from 'react';
import If, { Else } from './If';

const UserInfo = (props) => {
    const user = props.user || {};
    return (
        <div>
            <If test={user && user.name}>
                <p>Welcome {user.name}</p>
                <Else>
                    <p>Welcome Stranger</p>
                </Else>
            </If>
        </div>
    );
};

export default UserInfo;
