import React from 'react'

const LoginButton = ({ onLoginUserClick}) => {

  return(
      <a href="#" onClick={(event) => onLoginUserClick(event)}>Donor Login</a>
  )
}

export default LoginButton
