import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../Header/_header.scss';
import avatar1 from '../../../public/img/capa1.svg';
import avatar2 from '../../../public/img/capa2.svg';
import avatar3 from '../../../public/img/capa3.svg';
import avatar4 from '../../../public/img/capa4.svg';

const Header = () => {
    return (
        <header className=" container header">
            <div className="headerLesft">
                <h1>Get your oline Bunises the rigth way!</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti ex
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti ex ipsa unde
                    minima?
                </p>

                <div className="headerBtn">
                    <Link href="/profile" className="btn btn-light">Projects</Link>
                    <Link href="/contact" className="btn btn-danger">Hire me</Link>

                </div>
            </div>


            <div className="headerRigth">
                <article className="card1">
                    <Image
                        src={avatar1}
                        className={'img'}
                        alt={''}
                    />
                </article>
                <article className="card2">
                    <Image
                        src={avatar2}
                        className={'img'}
                        alt={''}
                    />
                </article>
                <article className="card3">
                    <Image
                        src={avatar3}
                        className={'img'}
                        alt={''}
                    />
                </article>
                <article className="card4">
                    <Image
                        src={avatar4}
                        className={'img'}
                        alt={''}
                    />
                </article>
            </div>
        </header>
    )
}

export default Header