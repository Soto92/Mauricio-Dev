import "./Stacks.css";

type CardProps = { img: string; title: string };

const Card: React.FC<CardProps> = ({ img, title }) => {
  return (
    <div className="Card">
      <img width={90} alt="icon" src={img} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
