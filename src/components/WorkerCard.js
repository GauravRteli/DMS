import React from "react";
import { FaRegEye, FaCheck } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const WorkerCard = ({ name, index, setSelectedWorkerDetail, workers, phoneNo }) => {
    console.log(index);
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
          onClick={() => setSelectedWorkerDetail(workers[index])}
        >
          <div className="flex items-center gap-1 justify-between">
            <FaRegEye /> View
          </div>
        </button>
        <button
          className="bg-none font-bold text-green-500 hover:text-green-400 transition-colors duration-300 ease-in-out"
        //   onClick={}
        >
          <div className="flex items-center gap-1 justify-between">
            <FaCheck /> Recruit
          </div>
        </button>
        <button
          className="bg-none font-bold text-red-500 hover:text-red-400 transition-colors duration-300 ease-in-out"
        //   onClick={}
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
