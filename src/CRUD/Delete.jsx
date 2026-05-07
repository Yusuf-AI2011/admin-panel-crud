import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../features/UsersReducer";

const Delete = ({ id, setDelete }) => {
  const dispatch = useDispatch();
  function DeleteMethod(e) {
    e.preventDefault();
    dispatch(deleteUsers(id));
  }
  return (
    <div className="flex justify-center items-center flex-col gap-[10px]">
      <h1 className="text-[20px]">Are you sure to delete this user?!</h1>
      <form onSubmit={DeleteMethod} className="flex justify-center items-center gap-[10px]">
        <button
          className="w-[100px] rounded-[6px] text-white bg-green-700 border-2"
          onClick={() => {
            setDelete(false);
          }}
        >
          Cancel
        </button>
        <button
          className="w-[100px] rounded-[6px] text-white bg-red-700 border-2"
          type="submit"
        >
          I'm sure!
        </button>
      </form>
    </div>
  );
};

export default Delete;
