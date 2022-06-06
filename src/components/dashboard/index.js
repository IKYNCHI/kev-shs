import React from 'react'
import {Link} from 'react-router-dom'
import './navbardashboard.css'
import './dashboard.css'
const Dashboard = () => {
  return (
    <div className='body'>
        <nav className='navbardashboard'>
        <div className='logokev'>
            <Link to='/' className='logodashboard'>
        <div className='biglogo'>
            KEV
            </div>
            <div className='smalllogo'>
                Smart Home Solutions
                
            </div>
            </Link>
        </div>
        <ul className='nav-items'>
        <li className='nav-item'><a href='https://dakboard.com/app/screenPredefined?p=a911d765329754a6321b3257a37e1583'>Dashboard</a></li>
        <li className='nav-item'><Link to='/viewdevices'>View Devices</Link></li>
        <li className='nav-item'><Link to='/'>Logout</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Dashboard