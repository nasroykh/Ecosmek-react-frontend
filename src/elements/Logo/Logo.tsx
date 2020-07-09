import React from 'react';
import mainLogo from '../../assets/images/cklogo(new).png';

const logo = (props: any) => (
    <div>
        <input style={{outline: "none"}} type="image" src={mainLogo} alt="Main Logo" height="40px"/>
    </div>
)

export default logo;