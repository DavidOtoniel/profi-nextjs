"use client";
import React, { useState } from 'react';
import { data } from './data';
import '../portafolio/_portafolio.scss';
import Buttons from './Buttons';
import Projects from './Projects';
import SectionHeader from '@/component/section-header/SectionHeader';

const Portafolio = () => {

    const [project, setProject] = useState(data);
    const category = data.map(item => item.category);

    const uniqueCategories = ["all", ...new Set(category)]

    // function to filter projects using category
    const filterProjectsHandler = (category) => {
        if (category == 'all') {
            setProject(data);
            return;
        }

        const filteredProjects = data.filter((project) => project.category === category);
        setProject(filteredProjects)
    }

    return (
        <section>


            <SectionHeader
                title={'Portfolio'}
                subtitle={''}
            />


            <div className="container">
                <Buttons categories={uniqueCategories}
                    onFilterProjects={filterProjectsHandler}
                />

                <Projects
                    projects={project}
                />
            </div>
        </section>
    )
}

export default Portafolio;


// time  02:20: