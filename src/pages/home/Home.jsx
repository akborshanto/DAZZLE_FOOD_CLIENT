import React, { useContext } from 'react'
import { AuthContextValue } from '../../firebase/authProvider/AuthProvider'
import Banner from './banner/Banner'
import Slider from './slider/Slider'
import Recents from './recentSection/Recents'
import ExtraSection1 from './extrasection/ExtraSection1'
import ExtraSection2 from './extrasection/ExtraSection2'
import UseTitle from '../../hooks/UseTitle'
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
  <ExtraSection1></ExtraSection1>
  <ExtraSection2></ExtraSection2>
    </div>
  )
}

export default Home
