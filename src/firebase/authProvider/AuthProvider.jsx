import React, { createContext, useState } from 'react'


export  const  AuthContextValue=createContext()

const AuthProvider = ({children}) => {
  
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)



/* all auth info inforamtion */
  const AuthInfo={

user

  }

  return (
    <div>

    <AuthContextValue.Provider value={AuthInfo}>
    
    {children}
    </AuthContextValue.Provider>


    </div>
  )
}

export default AuthProvider
