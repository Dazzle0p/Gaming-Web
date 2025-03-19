import "./games.css";
import Card from "../Card/Card";
import { assets } from "../../assets/assets";

export default function Games() {
  return (
    <div className="game">
      <Card image={assets.card1} title="Kipon" descr="Casual - Free" />
      <Card image={assets.card2} title="Kipon" descr="Casual - Free" />
      <Card image={assets.card3} title="Kipon" descr="Casual - Free" />
      <div className="explore">
        <p>Explore More Games</p>
      </div>
    </div>
  );
}
