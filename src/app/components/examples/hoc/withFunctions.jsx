import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import SimpleComponent from "./simpleComponent";
import SmallTitle from "../../common/typografy/smallTitle";

const WithFunctions = () => {
  const [Auth, setAuth] = useState(false);
  const onLogin = () => {
    setAuth(!Auth);
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("user", "LogIn");
  };
  const onLogOut = () => {
    setAuth(!Auth);
    localStorage.setItem("isAuth", "false");
    localStorage.removeItem("user");
  };

  return (
    <>
    <CardWrapper>
      <SmallTitle>HOC</SmallTitle>
      <SimpleComponent onLogOut={onLogOut} onLogin={onLogin} isAuth={Auth}/>
    </CardWrapper>
    </>
  );
};
export default WithFunctions;
