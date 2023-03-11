import React from "react";
import Worker from "./Worker";
const CountCard = ({ title, count }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 w-1/5 text-center">
      <h2 className="text-lg font-medium text-gray-700 mb-2">{title}</h2>
      <div className="flex items-center justify-center">
        <p className="text-4xl font-bold text-indigo-600">
          {count.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const totalCustomers = 1000;
  const openTickets = 50;

  return (
    <>
      <div className="p-6 border-2 my-3 container mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 py-3 mb-7 underline fade-in active">
          Dev Management And Services
        </h1>
        {/* <hr style={{color: "black",border: "1px solid grey", margin: "10px"}} /> */}
        <div className="flex flex-wrap flex-row gap-2 items-center w-full justify-center">
          <CountCard title="Total Recruitments" count={totalCustomers} />
          <CountCard title="Total Jobs" count={openTickets} />
        </div>
      </div>
      <div className="shadow rounded container mx-auto p-3 flex flex-row justify-between">
        <h1 className="text-3xl font-bold">Workers</h1>
        <div className="flex gap-2 ">
          <input
            className="p-2 outline-none border-b-2 border-slate-300 focus:border-slate-800"
            type="text"
            name="search"
            placeholder="Search"
          />
          <button
            type="button"
            className="text-white px-6 font-bold bg-slate-800 hover:bg-slate-700 p-2 rounded focus:outline-none focus:text-white"
          >
            Search
          </button>
        </div>
      </div>
      <div className="container bg-slate-800 shadow-sm border-2 mt-2 mb-2 rounded-lg grid mx-auto gap-4 grid-cols-4 grid-rows-1">
          <span className="p-3 tracking-wide text-white font-bold">Name</span>
          <span className="p-3 tracking-wide text-white font-bold">Phone No.</span>
          <span className="p-3 tracking-wide text-white font-bold">Profession</span>
          <span className="p-3 tracking-wide text-white font-bold">City</span>
      </div>
      <section>
        <Worker name="Gaurav" phone="6355312073" profession="Engineer" city="Nadiad"/>
        <Worker name="Gaurav" phone="6355312073" profession="Engineer" city="Nadiad"/>
        <Worker name="Gaurav" phone="6355312073" profession="Engineer" city="Nadiad"/>
        <Worker name="Gaurav" phone="6355312073" profession="Engineer" city="Nadiad"/>
      </section>
    </>
  );
};

export default Dashboard;
