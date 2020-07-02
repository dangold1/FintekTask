import React from 'react';
import './StaffItem.css';

const StaffItem = (props) => {
    const {firstname, lastname, job, avatar} = props;

    return (
        <div className="staff-item">
            <img src={avatar} className="staff-img" alt="loading"/>
            <h3 className="center">{firstname} {lastname}</h3>
            <h4 className="center">{job}</h4>
        </div>
    )
}

export default StaffItem;
