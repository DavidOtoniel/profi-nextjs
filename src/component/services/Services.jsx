"use client"
import React, { useContext } from 'react';
import { ThemeContext } from '../../app/context/Theme'
import Link from 'next/link';
import '../services/_services.scss';

const Services = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className='services'>
            <div className={`container servicesWapper `}>
                <Link href={'/services'} className={` ${theme == 'dark' ? 'dark' : 'bg'}`}>
                    <div className="textBtn">
                        <span className='icon'>Icon</span>
                        <p>Ui/Ux Design</p>
                    </div>
                </Link>
                <Link href={'/services'} className={` ${theme == 'dark' ? 'dark' : 'bg'}`}>
                    <div className="textBtn">
                        <span className='icon'>Icon</span>
                        <p>Frontend</p>
                    </div>
                </Link>
                <Link href={'/services'} className={` ${theme == 'dark' ? 'dark' : 'bg'}`}>
                    <div className="textBtn">
                        <span className='icon'>Icon</span>
                        <p>Backend</p>
                    </div>
                </Link>
                <Link href={'/services'} className={` ${theme == 'dark' ? 'dark' : 'bg'}`}>
                    <div className="textBtn">
                        <span className='icon'>Icon</span>
                        <p>Fullstack</p>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Services