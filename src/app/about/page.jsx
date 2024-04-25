import SectionHeader from '@/component/section-header/SectionHeader'
import React from 'react';
import Image from 'next/image';
import avatar from '../../../public/img/profi.jpg'
import '../about/_about.scss';
import  Link  from 'next/link';

const page = () => {
    return (
        <div className='about'>

            <SectionHeader
                title={'About Me'}
                subTitle={'Who I am and what i do'}                
            />

            <div className="container aboutContainer">
                <div className="imgAbout">
                    <Image
                        src={avatar}
                        // width={450}
                        alt='img about'
                    />
                </div>

                <div className="aboutText">
                    <h4>My name is David Otoniel, and Im developer</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum modi nesciunt
                        recusandae adipisci alias impedit, consectetur distinctio obcaecati eius, nisi
                        pariatur excepturi iure dignissimos, inventore officia! Qui unde ad minima?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsa laboriosam minus
                        nobis sint ratione dolorem harum? Magni, autem aspernatur!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe magni
                        perferendis aspernatur labore error suscipit vel nostrum, dignissimos velit pariatur
                        necessitatibus voluptate quisquam debitis obcaecati natus ex laudantium doloribus
                        hic ut. Quos assumenda, ex atque quia praesentium unde vitae.
                    </p>


                    <div className="btnAbout">
                        <Link href={''} className='btn btn-danger'>Download CV</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page