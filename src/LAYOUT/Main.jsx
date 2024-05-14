import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/footer/Footer'
import Navbar from '../shared/navbar/Navbar'
import Item from '../shared/navbar/Item'

const Main = () => {
  return (
    <div className='container mx-auto p-4'>
     {/*  <Item></Item> */}
<Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default Main
