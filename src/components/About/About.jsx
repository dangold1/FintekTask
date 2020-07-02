import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import paragraphsData from '../../data/paragraphs.json';
import './About.css'

const About = props => (
    <div className="about">
        <h1 className="about-header">Execution is everything</h1>
        {
            paragraphsData.map((paragraphData,index) => {
                const { title, content } = paragraphData;
                return (<Paragraph key={index} title={title} content={content}/>);
            })
        }
    </div>
)


export default About;
