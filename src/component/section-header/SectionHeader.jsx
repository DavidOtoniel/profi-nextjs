"use client"
import '../section-header/_sectionHeader.scss';
import React, { useContext } from 'react'
import { ThemeContext } from '../../app/context/Theme'

const SectionHeader = ({ title, subTitle }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`section-header ${theme}`}>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </div>
    )
}

export default SectionHeader