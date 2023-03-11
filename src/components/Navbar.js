import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const [active,setActive] = useState("Dashboard");
  return (
    <>
      <div class="grid grid-flow-row-dense grid-cols-6">
        <nav className="row-span-3 flex flex-col col-span-1 bg-gray-800 h-screen text-white float-left">
          <div>
            <div className="px-3 py-3 flex items-center justify-between">
              <span className="font-bold text-lg">DMS</span>
            </div>

            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to=""
                className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${(active === "Dashboard")? "bg-gray-700": ""}`}
                onClick={() => setActive("Dashboard")}
              >
                Dashboard
              </Link>

              <Link
                to="add-job"
                onClick={() => setActive("Add Jobs")}
                className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${(active === "Add Jobs")? "bg-gray-700": ""}`}
              >
                Add-Recruitments
              </Link>

              <Link
                to="manage-recruitment"
                onClick={() => setActive("Jobs")}
                className={`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${(active === "Jobs")? "bg-gray-700": ""}`}
              >
                Manage-Recruitments
              </Link>
            </div>
          </div>
          <button className="mt-auto bg-slate-100 py-3 rounded w-full text-slate-800 font-bold hover:bg-slate-300">Log Out</button>
        </nav>
        <div className="row-span-3 col-span-5 p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Navbar;
