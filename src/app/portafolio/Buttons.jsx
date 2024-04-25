"use client";
import React, { useState, useContext } from 'react';
import { ThemeContext } from '@/app/context/Theme'
import '../portafolio/_buttons.scss';

const Buttons = ({ categories, onFilterProjects }) => {

    const [activeCategories, setActiveCategories] = useState('all');
    const { theme, setTheme } = useContext(ThemeContext)


    const changeCategoryHandler = (activeCat) => {
        setActiveCategories(activeCat);
        onFilterProjects(activeCat)
    }

    return (
        <div className={`${theme === 'dark' ? 'btnDark' : 'btnCategories'}`}>
            {
                categories.map(category => <button key={category}
                    className={`btn   bg ${activeCategories == category ? "btn-danger" : ''}`}
                    onClick={() => changeCategoryHandler(category)}
                >
                    {category}
                </button>)
            }
        </div>
    )
}

export default Buttons