// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn==true?"Hello user!":"Access Denied"}</div>;
}

export default LoginMessage;
