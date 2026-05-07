import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/UsersReducer";
import axios from "axios";
import Post from "../CRUD/Post";
import DeleteFile from "../CRUD/Delete";

const Users = () => {
  const [post, setPost] = useState(false);
  const [Delete, setDelete] = useState({
    id: null,
    click: false,
  });

  const data = useSelector((state) => state.users)?.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {post ? <Post /> : null}
      {Delete?.click ? <DeleteFile id={Delete.id} setDelete={setDelete} /> : null}
      <button
        onClick={() => {
          setPost(!post);
        }}
        className="border-2 rounded-[6px]"
      >
        Create +
      </button>

      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, email }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>
                <button className="w-[70px] rounded-[6px] bg-orange-600 text-white border-2 py-[3px]">Edit</button>
                <button
                  className="w-[70px] rounded-[6px] bg-red-700 text-white border-2 py-[3px]"
                  onClick={() => {
                    setDelete({
                      id: id,
                      click: !Delete.click,
                    });
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
