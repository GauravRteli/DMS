import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkerCard from "./WorkerCard";

const JobDetails = () => {
  const [jobData, setJobData] = useState(null);
  const [workers, setWorkers] = useState([]);
  const [selectedWorkerDetail, setSelectedWorkerDetail] = useState(null);
  const getJobData = async () => {
    const id = sessionStorage.getItem("job_id");
    const data = await axios.post("/get-job", {
      job_id: id,
    });
    console.log(data);
    setJobData(data?.data);
    setWorkers(data?.data?.workerregistered);
  };
  useEffect(() => {
    getJobData();
  }, []);
  useEffect(() => {
    console.log(workers);
  }, [workers]);

  return (
    <div className="h-screen">
      <div className="bg-slate-50 p-4 m-2 shadow rounded-lg">
        <div className="grid grid-cols-3 m-2 gap-2">
          <div className="col-span-1">
            <p className="font-semibold">
              <span className="font-bold underline">
                Job title:&nbsp;&nbsp;
              </span>
              {jobData?.jobname}
            </p>
            <p className="font-semibold">
              <span className="font-bold underline">Salary:</span>&nbsp;&nbsp;
              {jobData?.salary} per month
            </p>
            <p className="font-semibold">
              <span className="font-bold underline">Shift:</span>&nbsp;&nbsp;
              {jobData?.shift}
            </p>
            <p className="font-semibold">
              <span className="font-bold underline">No Of Workers:</span>
              &nbsp;&nbsp;{jobData?.noofworkers}
            </p>
            <p className="font-semibold">
              <span className="font-bold underline">Worker`s Age</span>
              &nbsp;&nbsp;{jobData?.workerAge}+
            </p>
            {jobData?.limitedtime ? (
              <p className="font-semibold">
                <span className="font-bold underline">
                  Recruitment Valid Upto:
                </span>
                &nbsp;&nbsp;{new Date(jobData?.date).toUTCString()}
              </p>
            ) : (
              <p className="font-bold">Not a Limited time Recruitment</p>
            )}
            <p className="font-semibold">
              <span className="font-bold underline">Gender:</span>&nbsp;&nbsp;
              {jobData?.sex === "Both" ? "Both Female and Male " : ""} Workers
              are allowed
            </p>
            <p className="font-semibold">
              <span className="font-bold underline">
                Recruitment Started At:
              </span>
              &nbsp;&nbsp;{new Date(jobData?.createdAt).toUTCString()}
            </p>
          </div>
          <div className="col-span-2">
            <label className="font-bold">Requirements :</label>
            <p className="font-semibold bg-slate-200 mb-2 rounded-lg p-2">
              {jobData?.requirements}
            </p>
            <label className="font-bold">Description :</label>
            <p className="font-semibold bg-slate-200 rounded-lg p-2">
              {jobData?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 m-2 gap-2">
        <div
          className="bg-slate-50 p-4 col-span-2 overflow-scroll shadow rounded-lg"
          style={{ height: "55%" }}
        >
          <h2 className="text-xl font-bold mb-1">Workers</h2>
          <hr className="mb-2 border-slate-500" />
          {workers &&
            workers.map((worker, index) => {
              return (
                <WorkerCard
                  key={index}
                  index={worker._id}
                  workers={workers}
                  setWorkers={setWorkers}
                  setSelectedWorkerDetail={setSelectedWorkerDetail}
                  name={worker.name}
                  phoneNo={worker.phoneNo}
                />
              );
            })}
        </div>
        <div className="bg-slate-50 p-4 col-span-1 h-96 shadow rounded-lg">
          <p
            className="text-center font-bold text-2xl py-2"
            style={{ borderBottom: "2px dotted black" }}
          >
            Worker Detail
          </p>
          <p className="font-semibold mt-2">
            <span className="font-bold underline">Name :&nbsp;&nbsp;</span>
            {selectedWorkerDetail?.name}
          </p>
          <p className="font-semibold">
            <span className="font-bold underline">Date Of Birth:</span>
            &nbsp;&nbsp;
            {new Date(selectedWorkerDetail?.dateOfBirth).toUTCString()}
          </p>
          <p className="font-semibold">
            <span className="font-bold underline">Phone No. :</span>&nbsp;&nbsp;
            {selectedWorkerDetail?.phoneNo}
          </p>
          <div className="grid grid-cols-9">
            <p className="col-span-1 font-bold underline">Bio :</p>
            <p className="col-span-8 font-semibold" >{ selectedWorkerDetail?.bio }</p>
          </div>
          <p className="font-semibold mt-2 text-center ">
            <span className="font-bold underline">Skills :</span>
          </p>
          <div className="flex flex-wrap bg-white rounded-md m-2 p-2">
            {selectedWorkerDetail?.skills &&
              selectedWorkerDetail.skills.map((skill, index) => {
                return (
                  <p
                    className="bg-blue-100 py-1 px-2 rounded-md m-1 font-semibold"
                    key={index}
                  >
                    {skill}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
