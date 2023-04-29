import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Detail() {
  const location = useLocation();
  const info = location.state.info;
  const { projectname, username, teamname, link, title, description } = info;

  return (
    <section className="basis-4/5 bg-gray-100 px-28 py-10 flex flex-col sm:justify-center max-sm:h-full max-sm:px-5">
      <div className="flex flex-col h-5/6 bg-white rounded-lg p-5 ">
        <div className="flex flex-col overflow-x-hidden">
          <div className="flex justify-between items-center mb-4">
            <p className="text-3xl font-bold max-sm:text-xl max-sm:mr-3">
              {title}
            </p>
            <div className="sm:mr-5">
              <p className="sm:text-xl font-bold ">{projectname}</p>
              <div className="flex max-sm:flex-col">
                <p>{username}</p>
                <p className="sm:ml-2 text-gray-500">{teamname}</p>
              </div>
            </div>
          </div>
          {link ? (
            <div className=" font-semibold">
              <span>project 주소 : </span>
              <a className="text-green-500" href={link}>
                {link}
              </a>
            </div>
          ) : (
            ''
          )}
          <pre className="font-sans text-lg mt-4">{description}</pre>
        </div>
      </div>
    </section>
  );
}
