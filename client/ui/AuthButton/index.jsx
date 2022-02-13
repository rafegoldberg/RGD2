import React, { useState } from "react";
import {
  useGoogleLogin as useLogin,
  useGoogleLogout as useLogout,
} from "react-google-login";

const AuthButton = ({ onLogin, onLogout, onFail }) => {
  const clientId = `${process.env.GOOGLE_CLIENT_ID}.apps.googleusercontent.com`;

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = ({ profileObj: profile }) => {
    setAuth(true);
    setUser(profile);
    if (typeof onLogin === "function") onLogin(profile);
  };

  const handleLogout = () => {
    setAuth(false);
    if (typeof onLogout === "function") onLogout();
  };

  const handleError = () => {
    setAuth(false);
    if (typeof onFail === "function") onFail();
  };

  const { signIn, loaded } = useLogin({
    clientId,
    cookiePolicy: "single_host_origin",
    isSignedIn: true,
    onFailure: handleError,
    onSuccess: handleLogin,
  });

  const { signOut } = useLogout({
    clientId,
    onLogoutSuccess: handleLogout,
  });

  return (
    <React.Fragment>
      {loaded && auth && user.name}
      <button onClick={auth ? signOut : signIn}>
        {auth ? "Log Out" : "Log In"}
      </button>
    </React.Fragment>
  );
};

export default AuthButton;
