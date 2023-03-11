import React from 'react'

const Worker = ({name,phone,profession,city}) => {
  return (
    <div className="container shadow-sm border-2 mt-1 rounded-lg grid mx-auto gap-4 grid-cols-4 grid-rows-1">
          <span className="p-3 tracking-wide text-slate-800 font-bold">{name}</span>
          <span className="p-3 tracking-wide text-slate-800 font-bold">{phone}</span>
          <span className="p-3 tracking-wide text-slate-800 font-bold">{profession}</span>
          <span className="p-3 tracking-wide text-slate-800 font-bold">{city}</span>
    </div>
  )
}

export default Worker
