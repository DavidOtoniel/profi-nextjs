import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/component/section-header/SectionHeader';
import '../contact/_contact.scss';


const ContactPage = () => {
    return (
        <div className='contact'>
            <SectionHeader
                title={'Contact'}
                subTitle={''}

            />


            <div className="container contactText">
                <div className="iconCOntact">
                    <Link href={''} className='icon'>
                        <span>Icon</span>
                    </Link>
                    <Link href={''} className='icon'>
                        <span>Icon</span>
                    </Link>
                    <Link href={''} className='icon'>
                        <span>Icon</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactPage