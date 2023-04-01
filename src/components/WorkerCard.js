import React from "react";
import axios from 'axios';
import { FaRegEye, FaCheck } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const WorkerCard = ({ name, index, setSelectedWorkerDetail, workers,setWorkers, phoneNo }) => {


  const reject = async (workerId) => {
    const data = await axios.post("/reject-worker",{
      job_id: sessionStorage.getItem("job_id"),
      workerId
    })
    console.log(data);
    setWorkers(data?.data?.new_jobData?.workerregistered);
  }

  const recruit = async (workerId) => {
      const data = await axios.post("/recruit-worker",{
        workerId,
        job_id: sessionStorage.getItem("job_id")
      });
      console.log(data);
      setWorkers(data?.data?.new_jobData?.workerregistered);
  }

  const getWorker = (id) => {
    let wrk = null;
    console.log(workers);
    workers.map((worker,index) => {
      if(worker._id === id){
        wrk = worker;
      }
    })
    return wrk;
  }

  return (
    <div className="flex flex-row bg-white rounded-lg mb-2 shadow-md p-4">
      <div className="flex-grow">
        <p className="text-slate-800 text-lg font-bold">{name}</p>
      </div>
      <div className="flex-grow">
        <p className="text-slate-800 text-lg font-bold ">{phoneNo}</p>
      </div>
      <div className="flex justify-evenly flex-grow">
        <button
          id={index}
          className="bg-none font-bold text-blue-500 hover:text-blue-400 transition-colors duration-300 ease-in-out"
          onClick={() => setSelectedWorkerDetail(getWorker(index))}
        >
          <div className="flex items-center gap-1 justify-between">
            <FaRegEye /> View
          </div>
        </button>
        <button
          id={index}
          className="bg-none font-bold text-green-500 hover:text-green-400 transition-colors duration-300 ease-in-out"
          onClick={() => recruit(index)}
        >
          <div className="flex items-center gap-1 justify-between">
            <FaCheck /> Recruit
          </div>
        </button>
        <button
          className="bg-none font-bold text-red-500 hover:text-red-400 transition-colors duration-300 ease-in-out"
          onClick={() => reject(index)}
        >
          <div className="flex items-center gap-1 justify-between">
            <MdOutlineCancel /> Reject
          </div>
        </button>
      </div>
    </div>
  );
};

export default WorkerCard;
