import React, { useState, useEffect } from 'react'
import JobCard from './JobCard'
import axios from 'axios';
const ManageRecruitment = () => {

    const [recruitment, setRecruitment] = useState();
    const getData = async() => {
        const data = await axios.get('/get-recruitments');
        setRecruitment(data.data);
        console.log(data);
    }
    useEffect(() => {
        
        getData();

    }, [])

  return (
    <div>
        {
            recruitment?.map(({jobname,description,requirements,time,noofworkers,limitedtime,date,_id,workerAge,shift,sex,createdAt},index) => {
                return <JobCard getData={getData} key={_id} id={_id} jobname={jobname} description={description} createdAt={createdAt} workerAge={workerAge} shift={shift} sex={sex} requirements={requirements} time={time} noofworkers={noofworkers} limitedtime={limitedtime} date={date} />
            })
        }
        
    </div>
  )
}

export default ManageRecruitment
