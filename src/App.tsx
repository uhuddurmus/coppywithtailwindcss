import React from "react";
import logo from "./logo.svg";
import PageHeader from "./components/pageHeader";
import AppWrapper from "./components/appWrapper";
import "./tailwind.css";
function App() {
  return (
    <div className="flex justify-center">
      <div className="profile-content container mt-2 w-3/5">
        <div className="flex-row justify-center">
          <div className="">
            <div className="col-lg-12 rofile-content-content">
              <PageHeader />
            </div>
            <AppWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
