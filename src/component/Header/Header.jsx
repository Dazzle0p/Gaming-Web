import './header.css'
import { assets } from '../../assets/assets'
export default function Header(){
    return(
        <div className="header">
            <div className="left">
                <h1>Dazzle Gaming</h1>
            </div>
            <div className="right">
                    <h1 id='first'>Home</h1>
                    <h1>Games</h1>
                    <h1>Career</h1>
                    <h1>About</h1>
                    <h1 id='last'>Contact</h1>
            </div>
        </div>
    )
}