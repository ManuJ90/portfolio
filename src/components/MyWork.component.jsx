import React from 'react'
import workExperience from '../data/workExperience'
import CardExperience from "./CardExperience";
import SectionTitle from './SectionTitle'

function MyWork() {
    return (
      <div>
        <SectionTitle>My Experience</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {workExperience.map((e, idx) => (
            <CardExperience
              key={idx}
              title={e.title}
              time={e.time}
              p1={e.p1}
              p2={e.p2}
            />
          ))}
        </div>
      </div>
    );
}

export default MyWork