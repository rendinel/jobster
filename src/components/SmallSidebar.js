import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import NavLinks from './NavLinks'
import { useSelector, useDispatch } from 'react-redux'
// import { toggleSidebar } from '../assets/user/userSlice'
import { toggleSidebar } from '../assets/features/user/userSlice'

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            <NavLinks toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
