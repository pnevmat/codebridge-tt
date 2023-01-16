import React, {FC} from 'react';
import Card from '../Card/Card';
import {card} from '../../utils/types';

interface ArticlesProps {
  cards: Array<card>;
}

const Articles: FC<ArticlesProps> = ({cards}) => {
  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Articles;
