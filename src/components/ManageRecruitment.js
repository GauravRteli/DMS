import React, { useState, useEffect } from 'react'
import JobCard from './JobCard'
import axios from 'axios';
const ManageRecruitment = () => {

    const [recruitment, setRecruitment] = useState();
    const getData = async() => {
        const data = await axios.get('/get-recruitments');
        setRecruitment(data.data);
    }
    useEffect(() => {
        
        getData();

    }, [])

  return (
    <div>
        {
            recruitment?.map(({jobname,description,requirements,time,noofworkers,limitedtime,data,_id},index) => {
                return <JobCard key={_id} heading={jobname} description={description} requirements={requirements} time={time} />
            })
        }
        
    </div>
  )
}

export default ManageRecruitment
