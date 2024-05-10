import React from 'react'
import './Landingpage.css'
import bg from '../assets/images/sf.png'
import snapfestlogo from '../assets/images/snapfestlogo.png'
import Signup from '../components/Signup'

const LandingPage = () => {
    return (
        <div className='landingpage'>
            <div>
                <span className="snapfest">
                    SnapFest
                </span>
                <span className="gradient">
                    {/* <!-- <img src="gradient.jpg" alt="gradient"> --> */}
                </span>
                <span className="moments">
                    making moments
                </span>
                <span className="magical">
                    magical!
                </span>
                {/* <img className='snapfestlogo' src={snapfestlogo} alt="logo" /> */}
                {/* <img className="bg" src={bg} alt="Event" /> */}
                <div class="containerform" >
                    <Signup />
                </div>
            </div>
            <div className='footer'>
                <span><a href="#">&nbsp;About</a><span> | </span><a href="#">Help</a><span> | </span><a href="#">Terms and
                    Conditions</a><span> | </span><a href="#">Privacy policy</a></span><span>&nbsp; | &nbsp;&copy; SnapFest 2024 Group-1 CS5&nbsp;</span>
            </div>
        </div>
    )
}

export default LandingPage
// style="position:absolute;margin-left:32%;margin-top:-34%;font-family:Arial;"
// style="position: absolute;
// left: 500px;"

// style="float:right"