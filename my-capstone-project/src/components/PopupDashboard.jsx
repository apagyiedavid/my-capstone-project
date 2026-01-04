import React, { useState } from "react";
const PopupDashboard = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "announcements":
        return <Announcements />;
      case "comments":
        return <Comments />;
      case "members":
        return <Members />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold"
        >
          ×
        </button>

        {/* Navigation */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button onClick={() => setActiveTab("dashboard")} className="btn">
            Dashboard
          </button>
          <button onClick={() => setActiveTab("announcements")} className="btn">
            Announcements
          </button>
          <button onClick={() => setActiveTab("comments")} className="btn">
            Comments
          </button>
          <button onClick={() => setActiveTab("members")} className="btn">
            Members
          </button>
          <button onClick={() => setActiveTab("settings")} className="btn">
            Settings
          </button>
        </div>

        {/* Content */}
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default PopupDashboard;
