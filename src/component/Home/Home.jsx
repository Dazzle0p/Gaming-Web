import "./home.css";
import { assets } from "../../assets/assets";
export default function Home(){
    return(
        <div className="home">
            <h1>Made To Be Played</h1>
            <h3>The best in mobile Gaming</h3>
            <div className="home-img">
                <img src={assets.Google} alt="" />
                <img src={assets.apple} alt="" />
            </div>
        </div>
    )
}