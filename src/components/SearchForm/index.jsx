import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser } from "../SearchForm/UserSlice";
const SearchFrom = () => {
  const [currentUsername, setCurrentUsername] = useState("");
  const dispatch = useDispatch();

  const getUser = async (username) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}`
    );
    dispatch(addUser(data));
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(currentUsername);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <p>Search for user</p>
      <form>
        <input
          type="text"
          style={{ width: "250px", padding: "3px" }}
          onChange={(e) => setCurrentUsername(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFrom;
