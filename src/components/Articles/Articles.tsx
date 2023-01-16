import React, {FC} from 'react';
import Card from '../Card/Card';
import {card} from '../../utils/types';

interface ArticlesProps {
  cards: Array<card>;
  setClickedCard: (card: card) => void;
}

const Articles: FC<ArticlesProps> = ({cards, setClickedCard}) => {
  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} setClickedCard={setClickedCard} />
      ))}
    </div>
  );
};

export default Articles;
