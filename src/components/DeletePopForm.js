import React from "react";
import { HiX,HiXCircle } from "react-icons/hi";
import axios from 'axios';
const DeletePopForm = ({ setOpenDeletePopUp,jobname,id,getData }) => {

    const handleDelete = async () => {

        await axios.post('/delete-recruitment',{
            id
        });
        getData();
        setOpenDeletePopUp(false);
    }

  return (
    <div className="fixed inset-0 flex flex-column items-center justify-center">
      <div className="absolute inset-10 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg z-20 lg:w-1/3 w-2/3 p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4 italic">Delete</h2>
          <HiX
            className="text-2xl text-slate-800 font-bold hover:text-slate-500"
            onClick={() => setOpenDeletePopUp(false)}
          />
        </div>
        <h1 className="text-2xl font-bold underline italic text-center">{jobname}</h1>
        <p className="font-bold text-center">Are you sure you want to delete the Recruitment ?</p>
        <button onClick={handleDelete} className="bg-red-500 font-bold text-white rounded-md px-4 py-2 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-colors duration-300 ease-in-out">
          <div className="flex items-center gap-1">
            <HiXCircle /> Delete
          </div>
        </button>
      </div>
    </div>
  );
};
export default DeletePopForm;
;
