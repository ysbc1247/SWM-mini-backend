import axios from 'axios';
import React, { useState } from 'react';

export default function Add() {
  const [projectName, setProjectName] = useState('');
  const [userName, setUserName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const init = () => {
    setProjectName('');
    setUserName('');
    setTeamName('');
    setTitle('');
    setDescription('');
    setUrl('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    // post 요청하기
    axios.post('/new', {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        projectName,
        userName,
        teamName,
        title,
        description,
        link: url,
      },
    });

    init();
  };
  return (
    <section className="basis-4/5 bg-gray-100 px-28 py-10 flex flex-col  sm:justify-center max-sm:h-full max-sm:px-5">
      <div className="flex flex-col h-5/6 bg-white justify-center rounded-lg p-5">
        <form
          action=""
          className="flex flex-col h-full items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="w-4/5 flex flex-col items-center overflow-x-hidden">
            <input
              type="text"
              value={projectName}
              onChange={e => {
                setProjectName(e.target.value);
              }}
              placeholder="프로젝트명"
              className="border-2 w-full p-3 mb-2 text-sm"
              required
            />

            <input
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              placeholder="작성자명"
              className="border-2 w-full p-3 mb-2 text-sm"
              required
            />
            <input
              type="text"
              value={teamName}
              onChange={e => setTeamName(e.target.value)}
              placeholder="팀명"
              className="border-2 w-full p-3 mb-2 text-sm"
              required
            />

            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="제목"
              className="border-2 w-full p-3 mb-2 text-sm"
              required
            />
            <textarea
              name=""
              id=""
              cols="5"
              rows="10"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="설명"
              className="border-2 w-full p-3 mb-2 text-sm resize-none"
              required
            ></textarea>
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="URL (선택)"
              className="border-2 w-full p-3 mb-2 text-sm"
            />
          </div>

          <button className="bg-gray-800 w-9/12 text-xl text-white font-semibold my-4 p-2 rounded-lg">
            게시글 만들기
          </button>
        </form>
      </div>
    </section>
  );
}
