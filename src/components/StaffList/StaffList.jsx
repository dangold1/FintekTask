import React, { useEffect, useState } from 'react';
import StaffItem from '../StaffItem/StaffItem';
import { loadStaffData } from '../../services/staffService';
import './StaffList.css'

const StaffList = (props) => {

    const [staffData, setStaffData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        didMount();
    }, []);

    const didMount = async () => {
        setLoading(true);
        const data = await loadStaffData();
        setLoading(false);
        setStaffData(data);
    }

    return (
        <div className="staff-list">
            {
                loading ?
                    <h1>Loading...</h1>
                    : <React.Fragment>
                        {
                            staffData ?
                                staffData.map((staff, index) => {
                                    let { firstname, lastname, job, avatar } = staff;
                                    avatar +=`?${index}`;
                                    return (<StaffItem key={index} firstname={firstname} lastname={lastname} job={job} avatar={avatar} />);
                                })
                                : <h1>The number of profiles you requested is greater than the number of profiles in the repository.</h1>
                        }
                    </React.Fragment>
            }
        </div>
    )
}

export default StaffList;
