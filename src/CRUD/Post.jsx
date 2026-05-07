import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUsers } from "../features/UsersReducer";

const Post = () => {
  const [usersData, setUsersData] = useState({
    id: 0,
    name: "",
    email: "",
  });
  const dispatch = useDispatch();

  function PostMethod(e) {
    e.preventDefault();
    dispatch(postUsers());
  }

  function HandleChange(e) {
    setUsersData({
      ...usersData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <form className=" w-[250px] p-[20px] rounded-[6px] border-2 flex justify-center items-center flex-col gap-[20px]">
        <input
          value={usersData.id}
          onChange={HandleChange}
          name="id"
          className="border-2 p-[3px] rounded-[6px] w-[200px]"
          placeholder="ID"
          type="number"
        />
        <input
          value={usersData.name}
          onChange={HandleChange}
          name="name"
          className="border-2 p-[3px] rounded-[6px] w-[200px]"
          placeholder="Name"
          type="text"
        />
        <input
          value={usersData.email}
          onChange={HandleChange}
          name="email"
          className="border-2 p-[3px] rounded-[6px] w-[200px]"
          placeholder="Email"
          type="email"
        />
        <button onClick={PostMethod} className="border-2 p-[3px] rounded-[6px] w-[100px]">
          Add
        </button>
      </form>
    </div>
  );
};

export default Post;
