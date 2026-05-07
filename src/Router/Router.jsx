import { Routes, Route } from "react-router-dom";
import Users from "../components/Users";

import React from "react";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="*" element={<h1>Something went wrong!</h1>} />
      </Routes>
      
    </div>
  );
};

export default Router;
