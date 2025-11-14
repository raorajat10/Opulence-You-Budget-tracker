import React from 'react'
 const AuthLayout = ({children}) => {
  return (
    <div className='flex justify-center px-40 mt-40'>{children}</div> //centering the sign in and sign up pages as they are the children of auth folder
  )
} 
export default AuthLayout;
