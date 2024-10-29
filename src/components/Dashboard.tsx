// Dashboard.tsx
import React from "react";
import ChatComponent from "./ChatComponent";

const Dashboard: React.FC = () => {
  return (
    <>
      <section id="dashboard">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-3">
              <h4>(Side Navbar)</h4>
              {/* Other Dashboard content goes here */}
            </div>
            <div className="col-md-9">
              <ChatComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
