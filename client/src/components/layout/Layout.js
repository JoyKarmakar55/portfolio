import React from 'react';
import Home from '../../pages/Home/Home';
import { AiOutlineCloseCircle,AiOutlineMenu } from "react-icons/ai";
import './Layout.css';
import { useState } from 'react';
import Menus from '../Menus/Menus';
import About from '../../pages/About/About';
import Skills from '../../pages/Skills/Skills';
import Projects from '../../pages/Projects/Projects';

const Layout = () => {
    const [toggle,setToggle]=useState(false);


    //changing toggle 
    const handleToggle=()=>{
        setToggle(!toggle)
    }

  return (
    <>
        <div className="sidebar-section">
            <div className={toggle ?"sidebar-toggle" : "sidebar" }>
                <div className="sidebar-toggle-icons">
                
                    <p onClick={handleToggle}>
                    {
                        toggle ? (<AiOutlineCloseCircle size={40} />) : (<AiOutlineMenu size={40} />)
                    }
                    </p>
                </div>
                <Menus toggle = {toggle}/>
            </div>
        <div className='container-fluid m-0 p-0'>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
        </div>
    </>
  )
}

export default Layout