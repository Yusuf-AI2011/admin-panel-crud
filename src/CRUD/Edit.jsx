import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putUsers } from "../features/UsersReducer";

const Edit = ({ edit, setEdit }) => {
  const data = useSelector((state) => state.users)?.data[edit.id - 1];
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    id: data.id,
    name: data.name,
    email: data.email,
  });
  function HandleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  function ChangeMethod(e) {
    e.preventDefault();
    dispatch(putUsers([edit.id, userData]));
  }

  console.log(userData);

  return (
    <div>
      <form onSubmit={ChangeMethod}>
        <input
          placeholder="id"
          value={userData.id}
          onChange={HandleChange}
          name="id"
          type="number"
        />
        <input
          placeholder="name"
          value={userData.name}
          onChange={HandleChange}
          name="name"
          type="text"
        />
        <input
          placeholder="email"
          value={userData.email}
          onChange={HandleChange}
          name="email"
          type="email"
        />
        <div>
          <button type="submit">Change</button>
          <button
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
