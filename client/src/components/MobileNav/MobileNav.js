import React from 'react'
import { HiMenu } from "react-icons/hi";
import "./MobileNav.css"

export const MobileNav = () => {
  return (
    <>
        <div className='mobile-nav'>
            <div className='mobile nav-header'>
                <HiMenu size={30} /><span>
                    My Portfolio App
                </span>
            </div>
        </div>
    </>
  )
}
