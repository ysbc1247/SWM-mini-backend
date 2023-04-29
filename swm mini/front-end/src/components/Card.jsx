import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ info }) {
  const { projectname, username, teamname, date, title, description } = info;
  const navigate = useNavigate();

  return (
    <li
      className="flex flex-col bg-white p-6 cursor-pointer mb-5 border-2"
      onClick={() => navigate(`/products/${info.id}`, { state: { info } })}
    >
      <div className="flex justify-between">
        <p className="text-xl font-bold">{projectname}</p>
        <p className="text-gray-500">{date}</p>
      </div>
      <div className="flex">
        <p>{username}</p>
        <p className="ml-2 text-gray-500">{teamname}</p>
      </div>
      {/* <div>{date}</div> */}
      <p className="text-2xl font my-2 font-semibold max-sm:text-xl">{title}</p>
      <pre className="line-clamp-3 font-sans">{description}</pre>
    </li>
  );
}
