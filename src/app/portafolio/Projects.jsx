import React from 'react';
import Card from '@/component/Card/card';
import Image from 'next/image';
import Link from 'next/link';
import '../portafolio/_project.scss'


const Projects = ({ projects }) => {
    return (
        <div className='projects'>
            {
                projects && projects.map(({ id, category, image, title, desc, demo, github }) => <Card key={id}
                    className={''}
                >
                    <div className="image">
                        <Image
                            src={image}
                            alt={''}
                        />
                    </div>

                    <div className="content">
                        <h4>{title}</h4>
                        <p>{desc}</p>
                        <div className="cta ">
                            <Link href={demo} className='btn btn-primary gap-3' target='_blank' reel="nooper noreferrer">
                                Demo
                            </Link>
                            <Link href={github} className='btn btn-primary' target='_blank' reel="nooper noreferrer">
                                Github
                            </Link>
                        </div>
                    </div>
                </Card>)
            }
        </div>
    )
}

export default Projects