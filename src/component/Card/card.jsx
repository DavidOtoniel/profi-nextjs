import React, { useContext } from 'react'
import { ThemeContext } from '../../app/context/Theme'
import '../Card/_card.scss';

const Card = ({ children, className }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <article className={`${className} cards ${theme}`}>
            {children}
        </article>
    )
}

export default Card