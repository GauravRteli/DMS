import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import axios from "axios";
import { HiPencilAlt } from "react-icons/hi";

const PopupForm = ({
  job,
  jobdescription,
  jobtime,
  jobrequirements,
  jobnoofworkers,
  joblimitedtime,
  jobdate,
  id,
  jobworkerAge,
  jobshift,
  jobsex,
  setOpen,
  getData,
}) => {
  const [jobname, setJobname] = useState(job);
  const [noofworkers, setNoofworkers] = useState(jobnoofworkers);
  const [requirements, setRequirements] = useState(jobrequirements);
  const [description, setDescription] = useState(jobdescription);
  const [limitedtime, setLimitedtime] = useState(joblimitedtime);
  const [date, setDate] = useState(jobdate);
  const [sex, setSex] = useState(jobsex);
  const [shift, setShift] = useState(jobshift);
  const [workerAge, setWorkerAge] = useState(jobworkerAge);

  const handleInput = (value, id) => {
    if (value === "") {
      document.getElementById(id).style.backgroundColor =
        "rgba(255, 2, 2, 0.1)";
      document.getElementById(id).style.border = "1px solid red";
    } else {
      document.getElementById(id).style.backgroundColor = "white";
      document.getElementById(id).style.border = "1px solid rgba(0, 0, 0, 0.1)";
    }
    document.getElementById("update-error").innerHTML = "";
  };

  const handleRadio = (e) => {
    if (e.target.value === "YES") setLimitedtime(true);
    else setLimitedtime(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!jobname || !noofworkers || !requirements || !description || (limitedtime === true && !date) || !workerAge){
      document.getElementById("update-error").innerText = "Some fields are empty";
    }else{
      await axios.post("/update-recruitment", {
        jobname,
        date,
        description,
        limitedtime,
        noofworkers,
        requirements,
        sex,
        shift,
        workerAge,
        id,
      });
      getData();
      setOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-y-scroll">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg z-20 lg:w-1/3 w-2/3 p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4 italic">Contact Us</h2>
          <HiX
            className="text-2xl text-slate-800 font-bold hover:text-slate-500"
            onClick={() => setOpen(false)}
          />
        </div>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="jobName"
              className="block text-gray-700 font-bold mb-2"
            >
              Job Name *
            </label>
            <input
              type="text"
              id="jobName"
              name="jobName"
              value={jobname}
              onChange={(event) => {
                handleInput(event.target.value, event.target.id);
                setJobname(event.target.value);
              }}
              placeholder="JobName"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-slate-400 focus:shadow focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobName"
              className="block text-gray-700 font-bold mb-2"
            >
              No of Worker Required *
            </label>
            <input
              type="number"
              id="jobName"
              name="jobName"
              value={noofworkers}
              onChange={(event) => {
                handleInput(event.target.value, event.target.id);
                setNoofworkers(event.target.value);
              }}
              placeholder="No Of Workers Required"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:border-slate-400 focus:shadow leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="workerAge"
              className="block text-gray-700 font-bold mb-2"
            >
              Minimum Worker Age *
            </label>
            <input
              type="number"
              id="workerAge"
              name="workerAge"
              value={workerAge}
              onChange={(event) => {
                handleInput(event.target.value, event.target.id);
                setWorkerAge(event.target.value);
              }}
              placeholder="No Of Workers Required"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:border-slate-400 focus:shadow leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Sex of Worker *
            </label>
            <input
              checked={(sex === "Male")}
              id="Sex"
              name="Sex"
              type="radio"
              value="Male"
              onChange={(e) => setSex(e.target.value)}
            />
            <label
              htmlFor="description"
              className="text-gray-700 font-bold ml-3 text-center"
            >
              Male
            </label>
            <input
              checked={(sex === "Female")}
              id="Sex"
              name="Sex"
              type="radio"
              value="Female"
              onChange={(e) => setSex(e.target.value)}
              className="ml-3"
            />
            <label
              htmlFor="description"
              className="text-gray-700 font-bold ml-3 text-center"
            >
              Female
            </label>
            <input
              checked={(sex === "Both")}
              id="Sex"
              name="Sex"
              type="radio"
              value="Both"
              onChange={(e) => setSex(e.target.value)}
              className="ml-3"
            />
            <label
              htmlFor="description"
              className="text-gray-700 font-bold ml-3 text-center"
            >
              Both
            </label>
          </div>
          
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Working Time *
            </label>
            <input
              checked={(shift === "Day")}
              id="shift1"
              name="shift"
              type="radio"
              value="Day"
              onChange={(e) => setShift(e.target.value)}
            />
            <label
              htmlFor="description"
              className="text-gray-700 font-bold ml-3 text-center"
            >
              Day Shift
            </label>
            <input
              checked={(shift === "Night")}
              id="shift2"
              name="shift"
              type="radio"
              value="Night"
              onChange={(e) => setShift(e.target.value)}
              className="ml-3"
            />
            <label
              htmlFor="description"
              className="text-gray-700 font-bold ml-3 text-center"
            >
              Night Shift
            </label>
            <input
              checked={(shift === "Both")}
              id="shift3"
              name="shift"
              type="radio"
              value="Both"
              onChange={(e) => setShift(e.target.value)}
              className="ml-3"
            />
            <label
              htmlFor="description"
              className="text-gray-700 font-bold ml-3 text-center"
            >
              Any
            </label>
          </div>


          <div className="mb-4">
            <label
              htmlFor="requirements"
              className="block text-gray-700 font-bold mb-2"
            >
              Requirements *
            </label>
            <textarea
              type="text"
              id="requirements"
              name="requirements"
              value={requirements}
              onChange={(event) => {
                handleInput(event.target.value, event.target.id);
                setRequirements(event.target.value);
              }}
              placeholder="Requirements"
              className="border rounded w-full py-2 px-3 focus:border-slate-400 focus:shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(event) => {
                handleInput(event.target.value, event.target.id);
                setDescription(event.target.value);
              }}
              placeholder="description"
              className="border rounded w-full py-2 px-3 focus:border-slate-400 focus:shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold"
            >
              Is it Limited Time Recruitment *
            </label>
            <br />
            <input
              id="limitedtime"
              name="limitedtime"
              type="radio"
              value="YES"
              onChange={handleRadio}
              checked={limitedtime}
            />
            <label
              htmlFor="description"
              className="text-gray-700 font-bold ml-3 text-center"
            >
              YES
            </label>
            <input
              id="limitedtime"
              name="limitedtime"
              type="radio"
              value="NO"
              onChange={handleRadio}
              className="ml-3"
              checked={!limitedtime}
            />
            <label
              htmlFor="description"
              className="text-gray-700 font-bold ml-3 text-center"
            >
              NO
            </label>
          </div>
          {limitedtime ? (
            <>
              <label
                htmlFor="description"
                className="text-gray-700 font-bold text-center"
              >
                Valid Upto *
              </label>
              <input
                id="limitedtime"
                name="limitedtime"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="ml-3 mb-3"
              />
            </>
          ) : (
            <></>
          )}
          <span className="font-bold text-red-500 block" id="update-error"></span>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 font-bold text-white rounded-md px-4 py-2 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-colors duration-300 ease-in-out"
            >
              <div className="flex items-center gap-1 justify-between">
                <HiPencilAlt /> Edit
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PopupForm;
