import React from "react";

const ProfilePicture = () => (
  <div className="sub-menu-container">
    <div className="active-user">
      <i className="fas fa-user-circle mr-2" />
      <span id="profile" />
    </div>
    <div className="toggle-open" id="open">
      <i className="fas fa-bars" />
    </div>
    <div className="toggle-close" id="close">
      <i className="fas fa-window-close" />
    </div>
  </div>
);

export default ProfilePicture;
