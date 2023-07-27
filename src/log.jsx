import React, { useState } from "react";
import {Link} from "react-router-dom"
import Navbar from "./navbar";
import Footer from "./footer";
import Menu from "./menu";
import "./log.css"

const Log = () => {



    const [message,setMessage] = useState(false);
    function pass() {

        let id1 = document.getElementById("userInput").value;
        let id2 = document.getElementById("passwordInput").value;
        if(id1=="" || id2==""){

            alert("Pls enter input fields or sign up")
        }

        else if(id1!="" && id2!=""){

            setMessage(true)

        }

    }

    return(

    <div className="container"> 


    
        <div className="ui placeholder segment" style={{height:"400px", width:"900px", position:"relative",  top:"200px", marginLeft:"275px" }}>
            <div className="ui two column very relaxed stackable grid">
                <div className="column">
                <div className="ui form">
                    <div className="field">
                    <label>Username</label>
                    <div className="ui input">
                        <input id="userInput" type="text" placeholder="Username"/>
                        <i className="user"/>
                    </div>
                    </div>
                    <div className="field">
                    <label>Password</label>
                    <div className="ui input">
                        <input id="passwordInput" type="password"/>
                        <i className="lock"></i>
                    </div>
                    </div>
                  <Link to={message ? "/menu" : "#"} onClick={pass} onSubmit={pass}> <div className="ui blue submit button"  >Login</div> </Link>
                      </div>  
                </div>
                <div className="middle aligned column">
                <div className="ui big button">
                Sign Up

                </div>
                </div>
            </div>
            <div className="ui vertical divider">
                Or
            </div>
            </div>
        </div>

    )

}

export default Log;