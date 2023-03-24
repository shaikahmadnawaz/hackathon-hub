import React from "react";

function Navbar({ activeTab, onTabChange }) {
  return (
    <div>
      <button
        onClick={() => onTabChange("all")}
        className={activeTab === "all" ? "active" : ""}
      >
        All Submissions
      </button>
      <button
        onClick={() => onTabChange("favourites")}
        className={activeTab === "favourites" ? "active" : ""}
      >
        Favourite Submissions
      </button>
    </div>
  );
}

export default Navbar;
