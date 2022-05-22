import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  const buttonValue = () => {
    if (!isAuth) return "Войти";
    return "Выйти из системы";
  };
  const handleClick = () => {
    if (!isAuth) {
      onLogin();
    } else {
      onLogOut();
    }
  };
  return (
      <button className='btn btn-primary m-2' onClick={handleClick}>{buttonValue()}</button>
  );
};
SimpleComponent.propTypes = {
  onLogin: PropTypes.func,
  onLogOut: PropTypes.func,
  isAuth: PropTypes.bool
};
export default SimpleComponent;
