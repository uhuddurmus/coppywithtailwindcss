import React from "react";
import ApplicationStatistics from "./applicationsStatistics";
import AuthContent from "./authContent";
import List from "./List/list";

const AppWrapper = () => {
  return (
    <div>
      <ApplicationStatistics/>
      <AuthContent/>
      <List/>
    </div>
  );
};

export default AppWrapper;
