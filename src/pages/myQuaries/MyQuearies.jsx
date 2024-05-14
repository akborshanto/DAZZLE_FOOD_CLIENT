import React from 'react'
import MyQuariesBanner from './myQuariesBanner/MyQuariesBanner'
import MyQuerySection from './myQuerySection/MyQuerySection'
import UseTitle from './../../hooks/UseTitle';

const MyQuearies = () => {
  return (
    <div>


    <MyQuariesBanner></MyQuariesBanner>
    <UseTitle heading="  MY ALL QUERY"></UseTitle>
    <MyQuerySection></MyQuerySection>
    </div>
  )
}

export default MyQuearies
