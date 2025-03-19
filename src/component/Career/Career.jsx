import "./career.css";
import { assets } from "../../assets/assets";
export default function Career() {
  return (
    <div className="career">
      <div className="upper-div">
        <div className="up-div-content">
          <h4>Join Our Team</h4>
          <h1>
            It takes the world's best talent <br /> to change the game.
          </h1>
          <button>Explore Careers</button>
        </div>
        <div className="up-image">
          <img src={assets.cute3} alt="img" />
        </div>
      </div>
      <div className="lower-div">
        <div className="subs-form">
          <h3>Subscribe to Our Newsletter</h3>
          <br />
          <label>Email*</label>
          <br />
          <input id="inputfield" type="text" />
          <br />
          <br />
          <input type="checkbox" name="" id="" />
          <label> Yes, subscribe me to your newsletter.</label>
          <br />
          <button>Join</button>
        </div>
      </div>
      <div className="get-in-touch">
        <h1>Get In Touch</h1>
        <br />
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        <div className="form-container">
          <form>
            <label htmlFor="firstName">First Name:</label>
            <br />
            <input type="text" id="firstName" name="firstName" required />
            <br />
            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input type="text" id="lastName" name="lastName" required />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="message">Leave us a message:</label>
            <br />
            <textarea id="message" name="message" rows="4" required></textarea>
            <br />
          </form>
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}
