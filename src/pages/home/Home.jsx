import React, { useContext } from 'react'
import { AuthContextValue } from '../../firebase/authProvider/AuthProvider'
import Banner from './banner/Banner'
import Slider from './slider/Slider'
import Recents from './recentSection/Recents'
/* import FeatureFood from './featureFood/FeatureFood'
 */
const Home = () => {


  return (
    <div>
    <Slider></Slider>
  <Banner></Banner>
  {/* feature food */}
{/* <FeatureFood></FeatureFood>
 */}
{/* reacent card */}

<Recents></Recents>
  { /* add to extra section this section will be attractive and striking aswell as winsome */}
    </div>
  )
}

export default Home
