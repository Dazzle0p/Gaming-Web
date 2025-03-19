import { assets } from "../../assets/assets";
import './footer.css';

export default function Footer(){
    return(
        <div className="footer">
            <h1>An Immersive Gaming Experience</h1>
            <hr />
            <div className="footer-content">
                <div className="contact">
                    <h2>Contact</h2>
                    <br /><br />
                    <p>Sus@gmail.com</p>
                    <p>+91 9117XXXXXX</p>
                    <p>SomeWherere in this world</p>
                </div>
                <div className="Navigation">
                    <h2>Navigation</h2>
                    <br />
                    <p>Game</p>
                    <p>Career</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Accessibility</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Shipping Policy</p>
                    <p>Refund Policy</p>
                </div>
                <div className="social">
                    <h2>Social</h2>
                    <br />
                    <p>Discord</p>
                    <p>Twich</p>
                    <p>Facebook</p>
                    <p>Youtube</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="find-us">
                    <h2>Find-Us</h2>
                    <br />
                    <img src={assets.Google} alt="" />
                    <img src={assets.apple} alt="" />
                </div>
            </div>
            <hr />
            <h3>© 2035 by Dazzle-Gaming. Powered and secured by Susi</h3>
        </div>
    )
}