import React from 'react';
import './Projects.css';

const Projects = () => (
    <div className="flex p-24">
        <div className="group w-60 bg-green h-52 opacity-80 text-center rounded p-3">
            <div className="block group-hover:hidden">
                Shipmint
            </div>
            <div className="hidden group-hover:block">
                Created a platform to enable administrators and clients to share data and analysis for shipping costs.  Converted manual excel pivot tables into automated processing using NodeJS and React.
            </div>
        </div>
    </div>
)

export default Projects;