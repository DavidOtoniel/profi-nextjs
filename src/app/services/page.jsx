"use client"
import React from 'react';
import SectionHeader from '@/component/section-header/SectionHeader'
import { data } from './data';
import Card from '@/component/Card/card';
import '../services/_servicesPage.scss';


const ServicePage = () => {
    return (
        <section className='services-section'>
            <SectionHeader
                title={'Services'}
                subTitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti ex '}

            />

            <div className="container ">
                {data.map(({ id, icon, title, desc }) => <Card key={id}>
                        <span>{icon}</span>
                        <h5>{title}</h5>
                        <p>{desc}</p>
                </Card>)}
            </div>

        </section>
    )
}

export default ServicePage