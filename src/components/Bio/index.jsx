import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { setIsModalAppear } from "../Modal/ModalSlice";

const Bio = () => {
  const userData = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <div>
      {userData && (
        <div className="bio" onClick={() => dispatch(setIsModalAppear(true))}>
          <img
            className="bio-avatar"
            src={userData.avatar_url}
            alt="avatar-img"
          />
          <div className="bio-username">username: {userData.name}</div>
        </div>
      )}
    </div>
  );
};

export default Bio;
