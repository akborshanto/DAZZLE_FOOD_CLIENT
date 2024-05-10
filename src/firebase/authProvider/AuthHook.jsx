import React, { useContext } from 'react'
import { AuthContextValue } from './AuthProvider'

const useAuthHook = () => {

const auth=useContext(AuthContextValue)


  return auth
}

export default useAuthHook
