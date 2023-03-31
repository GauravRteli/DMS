import React from "react";
import { HiX } from "react-icons/hi";

const JobDetails = ({ setOpenViewPopUp }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-y-scroll">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg z-20 w-11/12 p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4 italic">View</h2>
          <HiX
            className="text-2xl text-slate-800 font-bold hover:text-slate-500"
            onClick={() => setOpenViewPopUp(false)}
          />
        </div>
        <div style={{ maxHeight: "750px", overflowY: "scroll",minWidth:"100%" }}>
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">jobname</h2>
            <p className="my-2">jobinfo</p>
            <h3 className="text-lg font-semibold">Workers:</h3>
            <ul className="list-disc ml-6">
              <li key="1" className="flex justify-between items-center my-2">
                <p>Worker Name 1</p>
                <div className="flex space-x-2">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Accept
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Reject
                  </button>
                </div>
              </li>
              <li key="2" className="flex justify-between items-center my-2">
                <p>Worker Name 1</p>
                <div className="flex space-x-2">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Accept
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Reject
                  </button>
                </div>
              </li>
            </ul>
            <div className="my-4">
              <h3 className="text-lg font-semibold">Accepted Workers:</h3>
              <ul className="list-disc ml-6">
                <li>Worker 1</li>
                <li>Worker 2</li>
                <li>Worker 3</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Rejected Workers:</h3>
              <ul className="list-disc ml-6">
                <li>worker 1</li>
                <li>worker 2</li>
                <li>worker 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
