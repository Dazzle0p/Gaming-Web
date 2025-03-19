import "./Card.css";

export default function Card({ image, title, descr }) {
  return (
    <div className="card">
      <img src={image} />
      <div className="dis">
        <p id="one">{title}</p>
        <p id="two">{descr}</p>
      </div>
    </div>
  );
}
