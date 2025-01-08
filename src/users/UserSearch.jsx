import React, { useContext, useState } from "react";
import GithubContext from "../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { searhUsers } = useContext(GithubContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("내용을 입력해주세요");
    } else {
      //유저찾기
      searhUsers(text);
      setText("");
    }
  };

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 
              lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                value={text}
                onChange={handleChange}
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="검색하세요"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                onChange={handleChange}
                value={text}
              >
                검색
              </button>
            </div>
          </div>
        </form>
      </div>
      <button className="btn btn-ghost btn-lg">리셋</button>
    </div>
  );
}
export default UserSearch;