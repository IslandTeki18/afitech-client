import React from "react";

export const Loader = () => {
  return (
    <div className="dkLoader">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};