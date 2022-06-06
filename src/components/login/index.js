import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import './login.css'
const Loginpage = () => {
  return (
    <div className='bodylogin'>
    <nav className='navbar'>
        <div className='logokev'>
        <div className='biglogo'>
            KEV
            </div>
            <div className='smalllogo'>
                Smart Home Solutions
            </div>
        </div>
        <ul className='nav-items'>
        <li className='nav-item'><a>Log In</a></li>
        </ul>
    </nav>
    <div className='container'>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <Link to='/dashboard' className='button'><button>Log In</button></Link>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    </div>
    </div>
  )
}

export default Loginpage