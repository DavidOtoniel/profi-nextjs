"use client";
import React, { useContext } from 'react'
import { ThemeContext } from '../../app/context/Theme'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../Footer/_footer.scss';


const Footer = () => {

    const Pathname = usePathname()
    const { theme } = useContext(ThemeContext)


    const data = [
        { id: 1, link: '/', caption: 'Home' },
        { id: 2, link: '/about', caption: 'About' },
        { id: 3, link: '/services', caption: 'Services' },
        { id: 4, link: '/portafolio', caption: 'Portfolio' },
        { id: 5, link: '/contact', caption: 'Contact' },
    ]

    return (
        <footer className={` footer navbar ${theme}`}>
            <div className="container-fluid footerContainer">
                <Link className="navbar-brand" href="/">DHRA</Link>

                <ul className="d-flex justify-content-center aling-items-center ">

                    {
                        data.map(({ id, link, caption }) => <li key={id} className={'nav-item'}>
                            <Link href={link} className={`nav-link  ${Pathname === link ? 'active' : ''}`}>
                                {caption}
                            </Link>
                        </li>)
                    }

                </ul>

            </div>

            <h6 className='footerCopy'> <span className='copy'>&copy;&copy;</span> 2024 DHRA Company. All Rihts Reserved</h6>
        </footer>
    )
}

export default Footer