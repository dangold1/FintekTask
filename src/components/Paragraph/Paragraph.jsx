import React from 'react'
import './Paragraph.css'

const Paragraph = (props) => {
    const { title, content } = props;
    return (
        <div className="paragraph">
            <h4 className="paragraph-title">{title}</h4>
            <p className="paragraph-content">{content}</p>
        </div>
    )
}

export default Paragraph;