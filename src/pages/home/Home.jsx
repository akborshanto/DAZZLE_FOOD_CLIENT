import React, { useContext } from 'react'
import { AuthContextValue } from '../../firebase/authProvider/AuthProvider'

const Home = () => {
  const {user}=useContext(AuthContextValue)
  console.log(user)
  return (
    <div>
      {user}
    </div>
  )
}

export default Home
