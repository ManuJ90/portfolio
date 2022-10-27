import React from "react";
import SectionTitle from "./SectionTitle";
import CardProjects from "./CardProjects";
import projects from "../data/projects";

function MyProjects() {
    return (
        <div id="projects">
            <SectionTitle> Recent projects </SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((w, idx) => (
                    <CardProjects key={idx} img={w.imageURL} title={w.title} link={w.link} tech={w.tech}/>
                ))}
            </div>
        </div>
    );
}

export default MyProjects;
