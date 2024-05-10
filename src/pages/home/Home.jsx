import React, { useContext } from 'react'
import { AuthContextValue } from '../../firebase/authProvider/AuthProvider'
import Banner from './banner/Banner'
import FeatureFood from './featureFood/FeatureFood'

const Home = () => {


  return (
    <div>
  <Banner></Banner>
  {/* feature food */}
  <FeatureFood></FeatureFood>


  { /* add to extra section this section will be attractive and striking aswell as winsome */}
    </div>
  )
}

export default Home
