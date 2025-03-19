import "./about.css";
import { assets } from "../../assets/assets";

export default function About() {
  return (
    <div className="about">
      <div className="about-dazzle">
        <h3>About Dazzle</h3>
        <h1>Your Source for Mobile Entertainment</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <button>Learn More</button>
      </div>
      <div className="about-dz-card">
        <img id="card-img" src={assets.bgtwo} alt="" />
        <p></p>
      </div>
      <div className="cute-img">
        <img src={assets.cute1} alt="" />
      </div>
    </div>
  );
}
