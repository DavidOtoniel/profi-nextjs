"use client";
import React, { useState, useContext } from 'react';
import { ThemeContext } from '@/app/context/Theme'
import Link from 'next/link';
import '../Navbar/_navbar.scss';
import { Moon, Sun } from 'react-bootstrap-icons';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const Pathname = usePathname()
    const [open, setOpen] = useState(false)
    const { theme, setTheme } = useContext(ThemeContext)


    const toggleMenu = () => {
        setOpen(!open)
        console.log('abiendo');
    }

    const navClose = () => {
        setOpen(false);
        console.log('cerrenado');
    }

    const data = [
        { id: 1, link: '/', caption: 'Home' },
        { id: 2, link: '/about', caption: 'About' },
        { id: 3, link: '/services', caption: 'Services' },
        { id: 4, link: '/portafolio', caption: 'Portfolio' },
        { id: 5, link: '/contact', caption: 'Contact' },
    ]

    const changeThemeHandler = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-md  ${theme}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">DHRA</Link>
                    {/* <div classNameName="moon1">
                        <Moon></Moon>
                    </div> */}
                    <button className={`navbar-toggler ${theme}`} type="button" onClick={toggleMenu} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon btn btn-light"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className={`d-flex justify-content-center aling-items-center ${theme == 'dark' ? 'anchor' : ''}`}>

                            {
                                data.map(({ id, link, caption }) => <li key={id} className={`nav-item ${theme}`}>
                                    <Link href={link} className={`nav-link  ${Pathname === link ? 'active' : ''}`}
                                        onClick={navClose}
                                    >
                                        {caption}
                                    </Link>
                                </li>)
                            }

                        </ul>

                    </div>
                    <div classNameName="moon2" onClick={changeThemeHandler}>
                        <span className='btnDarkIcon'>
                            {theme === 'light' ? <Moon></Moon> : <Sun></Sun>}
                        </span>
                    </div>

                </div>

            </nav>
        </div>
    )
}

export default Navbar