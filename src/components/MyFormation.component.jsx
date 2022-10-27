import React from "react";
import studyFormation from "../data/studyFormation";
import SectionTitle from "./SectionTitle";
import CardFormation from "./CardFormation";

function MyFormation() {
    return (
        <div className='grid' id="workExperience">
            <SectionTitle>Formation</SectionTitle>
            <div className='m-auto grid gap-8'>
                {studyFormation.map((f, idx) => (
                    <div className='grid gap-8 border-b pb-6 border-persimmon' key={idx}>
                        <CardFormation
                            title={f.title}
                            subtitle={f.subtitle}
                            time={f.time}
                            text={f.text}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyFormation;
