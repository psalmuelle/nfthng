import React from "react";
import "../../Assets/Styles/footer.css";
import logo from "../../Assets/Images/footer-logo.svg"
import facebookIcon from "../../Assets/Images/facebook.svg"
import instagramIcon from "../../Assets/Images/ig.svg"
import twitterIcon from "../../Assets/Images/twitter.svg"


export default function Footer(){
    return(
        <footer>
            <div>

            <ul className="icons__container-footer">
            <li><img className="footer__logo" src={logo} alt="metahub logo" /></li>
            <li className="social__container-footer">
               <img src={facebookIcon} alt="facebook"/>
               <img src={instagramIcon} alt="instagram"/>
               <img src={twitterIcon} alt="twitter"/> 
            </li>
            </ul>

            <ul>
            <li><h1>Community</h1></li>
            <li>NFTs</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
            </ul>
            
            <ul>
            <li><h1>Places</h1></li>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
            </ul>

            <ul>
            <li><h1>About us</h1></li>
            <li>Roadmap</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
            </ul>

            </div>
            <p>&copy; 2022 Metahub</p>
        </footer>
    )
}