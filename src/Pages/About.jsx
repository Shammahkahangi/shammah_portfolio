import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { skills, experiences } from '../constants';

const About = () => {
  return (
    <section className="max-container">


      
      <h1 className="headtext">
        Hello, I'm<span className="blue-gradient_text font-semibold drop-shadow"> SHAMMAH KAHANGI</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        I'm a dedicated Full Stack Developer and UI Designer in Uganda, specializing in JavaScript and TypeScript. With a broad skill set covering both front-end and back-end development, I'm passionate about creating dynamic and responsive web applications. My commitment to delivering exceptional user experiences is demonstrated through the seamless integration of design aesthetics and functionality. I thrive on solving complex challenges and stay at the forefront of evolving technologies. Let's collaborate to bring your digital vision to life with innovation and precision.</p>      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> My skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={`skill-${index}`} className=" block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here are
            some highlights
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`experience-${index}`}
                className="w-[60%] h-[60%] object-contain"
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img src={experience.icon} alt={experience.company_name} />
                  </div>
                }
                iconStyle={{
                  background: experience.bg,
                }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, pointIndex) => (
                      <li
                        key={`experience-${experience.company_name}-point-${pointIndex}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
