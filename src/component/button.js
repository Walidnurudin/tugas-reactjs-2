import React from 'react';
import './button.css';

const Btn = ({children, warna}) => {
    return <button className="tombol" style={{background:warna}}>
        {children}
    </button>
}


export default Btn;
