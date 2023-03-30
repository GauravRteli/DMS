import { useState } from "react";
import axios from 'axios';
import bcrypt from 'bcryptjs'
import SuccessImage from '../assets/success.jpg'
function Recruitment() {
  const [jobName, setJobName] = useState("");
  const [noofworkers, setNoofworkers] = useState(0);
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");
  const [limitedtime, setLimitedtime] = useState(false);
  const [date, setDate] = useState("");
  const [otp, setOtp] = useState("");
  const [successfull,setSuccessfull] = useState(false);
  const [sex, setSex] = useState("Male");
  const [shift, setShift] = useState("Day");
  const [salary, setSalary] = useState(0);
  const [workerAge, setWorkerAge] = useState(14);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(limitedtime && date){
      let day,month,year;
      year = date.substring(0,4);
      month = date.substring(6,7);
      day = date.substring(9,10);
      console.log(date);
      console.log(year + " " + month + " " + day);
    }

    if(!jobName || !noofworkers || !requirements || !description || (limitedtime === true && !date) || !otp || !workerAge || !salary){
      document.getElementById("message").innerText = "Some fields are empty";
    }else if(!(await bcrypt.compare(otp,sessionStorage.getItem('SECRET_CODE')))){
      document.getElementById('message').innerHTML = "Incorrect OTP";
    }else{
      const data = await axios.post("/add-recruitment",{
        jobName,noofworkers,requirements,description,limitedtime,date,workerAge,shift,sex,salary
      });
      if(data.status === 200)
        setSuccessfull(true);
      console.log(data);
    }
  };

  const handleSuccess = () => {
    setJobName("");
    setDate("");
    setDescription("");
    setRequirements("");
    setNoofworkers(0);
    setOtp("");
    setSalary(0);
    setWorkerAge(0);
    setShift("Day");
    setSex("Male");
    sessionStorage.removeItem("SECRET_CODE");
    setLimitedtime(false);
    setSuccessfull(false);
  }

  const handleOTPButtonClick = async (e) => {
    e.preventDefault();
    const data = await axios.get("/getotp");
    console.log(data?.data?.OTP);
    const OTP = await bcrypt.hash(data?.data?.OTP+"", 10);
    sessionStorage.setItem("SECRET_CODE",OTP);
  };

  const handleInput = (value,id) => {
    if(value === ""){
        document.getElementById(id).style.backgroundColor = "rgba(255, 2, 2, 0.1)";
        document.getElementById(id).style.border = "1px solid red";
    }
    else{
        document.getElementById(id).style.backgroundColor = "white";
        document.getElementById(id).style.border = "1px solid rgba(0, 0, 0, 0.1)";
    }
    document.getElementById('message').innerHTML = "";
  }

  const handleRadio = (e) => {
    if (e.target.value === "YES") setLimitedtime(true);
    else setLimitedtime(false);
  };
  const handleSex = (e) => {
    setSex(e.target.value);
  }

  return (
    (!successfull)?<div>
        <h1 className="font-bold text-5xl mb-5 text-center">Recruitment</h1>
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
              value={jobName}
              onChange={(event) => {
                handleInput(event.target.value,event.target.id)
                setJobName(event.target.value)
              }}
              placeholder="JobName"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-slate-400 focus:shadow focus:shadow-outline"
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
              onChange={handleSex}
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
              onChange={handleSex}
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
              onChange={handleSex}
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
              htmlFor="noofworkers"
              className="block text-gray-700 font-bold mb-2"
            >
              No of Worker Required *
            </label>
            <input
              type="number"
              id="noofworkers"
              name="noofworkers"
              value={noofworkers}
              onChange={(event) => {
                handleInput(event.target.value,event.target.id)
                setNoofworkers(event.target.value)
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
              Minimum age of worker *
            </label>
            <input
              type="number"
              id="workerAge"
              name="workerAge"
              value={workerAge}
              onChange={(event) => {
                handleInput(event.target.value,event.target.id)
                setWorkerAge(event.target.value)
              }}
              placeholder="Minimum age of worker"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:border-slate-400 focus:shadow leading-tight focus:outline-none focus:shadow-outline"
            />
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
              htmlFor="salary"
              className="block text-gray-700 font-bold mb-2"
            >
              Salary *
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={salary}
              onChange={(event) => {
                handleInput(event.target.value,event.target.id);
                setSalary(event.target.value)
              }}
              placeholder="Salary ..."
              className="border rounded w-full py-2 px-3 text-gray-700 focus:border-slate-400 focus:shadow leading-tight focus:outline-none focus:shadow-outline"
            />
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
                handleInput(event.target.value,event.target.id)
                setRequirements(event.target.value)
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
                handleInput(event.target.value,event.target.id)
                setDescription(event.target.value)
              }}
              placeholder="description"
              className="border rounded w-full py-2 px-3 focus:border-slate-400 focus:shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Is it Limited Time Recruitment *
            </label>
            <input
              checked={limitedtime}
              id="limitedtime"
              name="limitedtime"
              type="radio"
              value="YES"
              onChange={handleRadio}
            />
            <label
              htmlFor="description"
              className="text-gray-700 font-bold ml-3 text-center"
            >
              YES
            </label>
            <input
            checked={!limitedtime}
              id="limitedtime"
              name="limitedtime"
              type="radio"
              value="NO"
              onChange={handleRadio}
              className="ml-3"
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
                onChange={(event) => setDate(event.target.value)}
                className="ml-3 mb-3"
              />
            </>
          ) : (
            <></>
          )}
          <div className="mb-1">
            <label htmlFor="otp" className="block text-gray-700 font-bold mb-2">
              OTP *
            </label>
            <div className="flex">
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(event) => {
                  handleInput(event.target.value,event.target.id)
                  setOtp(event.target.value)
                }}
                placeholder="OTP"
                className="border rounded w-auto py-2 px-3 focus:border-slate-400 focus:shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                onClick={handleOTPButtonClick}
                className="bg-blue-500 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send OTP
              </button>
            </div>
          </div>
          <span className="font-bold text-red-500" id="message"></span>
          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>:<div className="w-full h-full text-center flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center px-20 py-10 rounded-2xl shadow-2xl">
            <img src={SuccessImage} className="w-20 mb-4" alt="SuccessImage"/>
            <p className="font-bold text-2xl mb-4">Successfull</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSuccess}
            >
              Back
            </button>
            </div>
      </div>
    );
}

export default Recruitment;
