import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbardevicesapp.css'
import './devicesapp.css'
import { FaRegLightbulb,FaFan } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { FiWind,FiSpeaker } from "react-icons/fi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdOutlineMicrowave } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
const Viewdevices = () => {
  return (
    <div className='bodydevices'>
        <nav className='navbar'>
        <div className='logokev'>
            <Link to='/dashboard' className='logo'>
        <div className='biglogo'>
            KEV
            </div>
            <div className='smalllogo'>
                Smart Home Solutions
                
            </div>
            </Link>
        </div>
        <ul className='nav-items'>
        <li className='nav-item'><Link to='/dashboard'>Dashboard</Link></li>
        <li className='nav-item'><Link to='/viewdevices'>View Devices</Link></li>
        <li className='nav-item'><Link to='/'>Logout</Link></li>
        </ul>
    </nav>
    <div className='wholedevice'>
    <h4>Connected Devices:</h4>
    <div className='devices'>
      <div className='device'>Living Room Light
      <FaRegLightbulb/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
        
      <div className='device'>Electric Fan LR
      <FaFan/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
      <div className='device'>Speaker
      <FiSpeaker/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
      <div className='device'>Living Room Switch
      <SiSocketdotio/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
    </div>
    <div className='devices'>
      <div className='device'>Kitchen Room Light
      <FaRegLightbulb/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
      <div className='device'>Refrigerator
      <CgSmartHomeRefrigerator/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
      <div className='device'>Microwave
      <MdOutlineMicrowave/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
      <div className='device'>Electric Fan KR
      <FaFan/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
    </div>
    <div className='devices'>
      <div className='device'>Garage Room Light
      <FaRegLightbulb/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
      <div className='device'>Garage Door
      <GiHomeGarage/>
      <button className='buttons'>
        Close/Open
        </button>
        </div>
      <div className='device'>A/C Garage
      <FiWind/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
      <div className='device'>Garage Switch
      <SiSocketdotio/>
      <button className='buttons'>
        Turn ON/OFF
        </button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Viewdevices