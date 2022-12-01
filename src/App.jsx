import React from "react";
import SearchFrom from "./components/SearchForm";
import Bio from "./components/Bio";
import Title from "./components/Title";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className="app">
      <Title />
      <SearchFrom />
      <Bio />
      <Modal />
    </div>
  );
};

export default App;
