import React,{ useState } from "react";
import { HiPencilAlt,HiXCircle } from "react-icons/hi";
import DeletePopForm from "./DeletePopForm";
import PopupForm from "./PopupForm";


const JobCard = ({ jobname,description,requirements,time,noofworkers,limitedtime,date, id,getData}) => {
  const recruitmentTime = new Date(time);
    const [open, setOpen] = useState(false);
    const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
    const handleDelete = () => {
      setOpenDeletePopUp(true);
    }
    const handleEdit = () => {
      setOpen(true);
    }

  return (
    <>
    <div className="bg-white rounded-md mb-4 shadow-md p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-2">{jobname}</h2>
        <p className="text-gray-700 font-bold">
          {recruitmentTime.toUTCString()}
        </p>
      </div>
      <label className="text-grey-700 font-bold">Description</label>
      <p className="text-gray-700 mb-4 ml-4">{description}</p>
      <label className="text-grey-700 font-bold">Requirements</label>
      <ul className="list-disc list-inside mb-4 ml-4">{requirements}</ul>
      <div className="flex gap-2 w-full">
        <button onClick={handleEdit} className="bg-blue-500 font-bold text-white rounded-md px-4 py-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-colors duration-300 ease-in-out">
          <div className="flex items-center gap-1 justify-between">
            <HiPencilAlt /> Edit
          </div>
        </button>
        <button onClick={handleDelete} className="bg-red-500 font-bold text-white rounded-md px-4 py-2 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-colors duration-300 ease-in-out">
          <div className="flex items-center gap-1 justify-between">
            <HiXCircle /> Delete
          </div>
        </button>
      </div>
    </div>
    {(openDeletePopUp && !open)? <DeletePopForm setOpenDeletePopUp={setOpenDeletePopUp} id={id} getData={getData} jobname={jobname} />:<></>}
    {(open && !openDeletePopUp)?<PopupForm getData={getData} key={id} id={id} setOpen={setOpen} job={jobname} jobdescription={description} jobrequirements={requirements} jobtime={time} jobnoofworkers={noofworkers} joblimitedtime={limitedtime} jobdate={date} />:<></>}
    </>
  );
};

export default JobCard;
