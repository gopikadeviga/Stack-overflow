import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'

const Home = ({ slideIn, handleSlideIn }) => {
  return (
    <div className='home-container-1'>
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn}/>
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />

      </div>
    </div>
  )
}

export default Home
