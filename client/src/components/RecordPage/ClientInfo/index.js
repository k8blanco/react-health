import React from "react";

function ClientInfo({ children }) {
  return (
    <div className="cardBody container card clientHeaderCard">
    <div className = "cardBodyColor">
      {children}
    </div>
    </div>
  );
}

export default ClientInfo;
