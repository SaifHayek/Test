import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { setIsModalAppear } from "./ModalSlice";

const Modal = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const isModalAppear = useSelector((state) => state.modal.value);
  const userData = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const getRepo = async (url) => {
    const allRepos = await axios.get(url);
    setRepos(allRepos.data);
  };
  useEffect(() => {
    getRepo(userData?.repos_url);
  }, [isModalAppear]);

  const getPullRequests = async (url) => {
    const { data } = await axios.get(url);
    console.log(data);
  };

  return (
    <div className={`modal ${isModalAppear ? "appear" : "hidden"}`}>
      {children && <div>{children}</div>}
      {userData && (
        <div className="user-info">
          <p>Username: {userData.name}</p>
          <img src={userData.avatar_url} alt="" width="80" />
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <div>
            All Repos:
            <ul className="repos-list">
              {repos.map((ele) => (
                <li
                  key={ele.id}
                  className="repo-name"
                  onClick={() => getPullRequests(ele.url + "/pulls")}
                >
                  {ele.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <button onClick={() => dispatch(setIsModalAppear(false))}>Close</button>
    </div>
  );
};

export default Modal;
