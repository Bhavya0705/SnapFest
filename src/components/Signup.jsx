import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <div>
            <div className="login" style={{ width: '35vw', height: '30vw' }}>
                <div style={{ height: '0.5vw' }}></div>
                <div style={{ borderBottom: "1 solid #c9a48e", lineHeight: "3vw" }}>
                    <p style={{ textAlign: "center", color: "#c9a48e", fontFamily: "gtsupe", fontSize: "2vw" }}>Sign Up</p>
                    <div style={{ height: "0vw" }}></div>
                </div>
                <form>
                    <div className="icon1">
                        <i className="fa fa-user" aria-hidden="true" style={{ color: "#c9a48e", fontSize: "2.1vw" }}></i>
                    </div>
                    <div className="form2">
                        <input style={{ width: "28vw", height: "2.5vw", fontFamily: "gtsuper" }} type="text" id="text" placeholder="Name" />
                    </div>

                    <div className="icon2">
                        <i className="fa fa-envelope" aria-hidden="true" style={{ color: "#c9a48e", fontSize: "2.1vw" }}></i>
                    </div>
                    <div className="form3">
                        <input style={{ width: "28vw", height: "2.5vw", fontFamily: "gtsuper" }} type="text" id="text" placeholder="E-Mail" />
                    </div>

                    <div className="icon3">
                        <i className="fa fa-phone" aria-hidden="true" style={{ color: "#c9a48e", fontSize: "2.1vw" }}></i>
                    </div>
                    <div className="form4">
                        <input style={{ width: "28vw", height: "2.5vw", fontFamily: "gtsuper" }} type="text" id="text" placeholder="Mobile" />
                    </div>

                    <div style={{ position: "absolute", top: "22vw", left: "7vw", fontSize: "1.1vw", color: "#BEBEBE", fontFamily: "gtsuper" }}>
                        By signing, you agree to our terms and conditions
                    </div>

                    <a href="#!test2">
                        <div style={{ position: "absolute", top: "27.3vw", left: "1.6vw", fontFamily: "gtsuper", fontSize: "1vw" }}>
                            Have an account? Login
                        </div>
                    </a>

                    <a href="#!test">
                        <div className="btn1" type="" style={{ textAlign: "center", position: "absolute", top: "26vw", left: "14vw", fontSize: "1.2vw" }}>
                            <div className="load1" style={{ backgroundColor: "#c9a48e", fontFamily: "gtsuper", color: "white", height: ".2vw", fontSize: "1vw", borderRadius: "4px", padding: "0.8vw 4vw 2vw 4vw" }}>
                                <div>SUBMIT</div>
                            </div>
                        </div>
                    </a>

                </form>
            </div>

        </div>
    )
}

export default Signup
