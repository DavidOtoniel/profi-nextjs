"use client";
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../app/context/Theme'
import '../Fasqs/_faqItem.scss';



const FaqItem = ({ title, desc }) => {

    const [open, setOpen] = useState(false);
    const { theme } = useContext(ThemeContext)


    return (
        <article className={`faqItem ${open ? 'opening' : ''}`} onClick={() => setOpen(!open)}>
            <div className="open">
                <span className="icon">{open ? '-' : '+'}</span>
                <h6>{title}</h6>
            </div>
            {open && <p>{desc}</p>}
        </article>
    )
}

export default FaqItem
