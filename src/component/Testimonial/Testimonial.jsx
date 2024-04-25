"use client";
import React, { useContext } from 'react';
import { ThemeContext } from '../../app/context/Theme'
import '../Testimonial/_testimonial.scss';
import { data } from './testiData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const Testimonial = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className='container testimonials'>
            <h2>Testimonials</h2>
            <p>Check out what my client say</p>

            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {data.map(({ id, name, avatar, profesion, quote }) => <SwiperSlide key={id}>
                    <div className={`avatarWapper `}>
                        <div className="avatar">
                            <Image
                                src={avatar}
                                width={500}
                                alt={''}
                                className={'img'}
                            />
                        </div>
                    </div>

                    <div className={` ${theme == 'dark'? 'dark': 'bg'}`}>
                        <h6>{name}</h6>
                        <small>{profesion}</small>
                        <p>{quote}</p>
                    </div>

                </SwiperSlide>
                )}

            </Swiper>
        </div>
    )
}

export default Testimonial