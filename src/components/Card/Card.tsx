import React, {FC} from 'react';
import styles from './Card.module.scss';

interface CardProps {
  card: {
    id: string;
    image: string;
    date: string;
    title: string;
    description: string;
  };
}

const Card: FC<CardProps> = ({card}) => {
  return (
    <div>
      <div>
        <img src={card.image} alt="" />
      </div>
      <div>
        <div></div>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <button>
          <span>Read more</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
