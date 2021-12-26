import React from "react";
import "./Login.css";
import spotifyWhite from "./assets/images/Spotify-White-Logo.wine.png";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      {/* spotify logo */}
      <img src={spotifyWhite} />
      {/* spotify with button */}
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
