import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HiPencilAlt, HiXCircle } from "react-icons/hi";
import { FaRegEye } from "react-icons/fa";
import DeletePopForm from "./DeletePopForm";
import PopupForm from "./PopupForm";
import JobDetails from "./JobDetailsPopUp";

const JobCard = ({
  jobname,
  description,
  requirements,
  time,
  workerAge,
  shift,
  sex,
  noofworkers,
  limitedtime,
  salary,
  date,
  id,
  createdAt,
  getData,
}) => {
  const recruitmentTime = new Date(createdAt);
  const [open, setOpen] = useState(false);
  const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
  const [openViewPopUp, setOpenViewPopUp] = useState(false);
  const handleDelete = () => {
    setOpenDeletePopUp(true);
  };
  const handleEdit = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-md mb-4 shadow-md p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-2">{jobname}</h2>
          <p className="text-gray-700 font-bold">
            {recruitmentTime.toUTCString()}
          </p>
        </div>
        <label className="text-grey-700 font-bold">Description {salary}</label>
        <p className="text-gray-700 mb-4 ml-4">{description}</p>
        <label className="text-grey-700 font-bold">Requirements</label>
        <ul className="list-disc list-inside mb-4 ml-4">{requirements}</ul>
        <div className="flex gap-2 w-full">
          <Link
            to='../jobdetails'
          >
            <button
              className="bg-green-600 font-bold text-white rounded-md px-4 py-2 hover:bg-white hover:text-green-500 hover:border hover:border-green-500 transition-colors duration-300 ease-in-out"
              onClick={() => sessionStorage.setItem("job_id",id)}
            >
              <div className="flex items-center gap-1 justify-between">
                <FaRegEye /> View
              </div>
            </button>
          </Link>

          <button
            onClick={handleEdit}
            className="bg-blue-500 font-bold text-white rounded-md px-4 py-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-colors duration-300 ease-in-out"
          >
            <div className="flex items-center gap-1 justify-between">
              <HiPencilAlt /> Edit
            </div>
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 font-bold text-white rounded-md px-4 py-2 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-colors duration-300 ease-in-out"
          >
            <div className="flex items-center gap-1 justify-between">
              <HiXCircle /> Delete
            </div>
          </button>
        </div>
      </div>

      {openViewPopUp && !open && !openDeletePopUp ? (
        <JobDetails setOpenViewPopUp={setOpenViewPopUp} />
      ) : (
        <></>
      )}

      {openDeletePopUp && !open ? (
        <DeletePopForm
          setOpenDeletePopUp={setOpenDeletePopUp}
          id={id}
          getData={getData}
          jobname={jobname}
        />
      ) : (
        <></>
      )}
      {open && !openDeletePopUp ? (
        <PopupForm
          getData={getData}
          key={id}
          id={id}
          setOpen={setOpen}
          job={jobname}
          jobsalary={salary}
          jobdescription={description}
          jobrequirements={requirements}
          jobtime={time}
          jobnoofworkers={noofworkers}
          joblimitedtime={limitedtime}
          jobworkerAge={workerAge}
          jobshift={shift}
          jobsex={sex}
          jobdate={date}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default JobCard;
