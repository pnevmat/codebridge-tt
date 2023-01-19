import {FC} from 'react';
import {useStore} from '../../redux/store';
import Card from '../Card/Card';
import chooseCards from '../../utils/chooseCards';
import {card} from '../../utils/types';
import styles from './Articles.module.scss';

interface ArticlesProps {
  filterChange: string;
  setClickedCard: (card: card) => void;
}

const Articles: FC<ArticlesProps> = ({filterChange, setClickedCard}) => {
  const {articles: cards} = useStore();

  const machedInTitle = chooseCards(cards, filterChange.split(' '), 'title');

  const machedInSummary = chooseCards(
    cards,
    filterChange.split(' '),
    'summary',
  );

  const foundCards = [
    ...machedInTitle,
    ...machedInSummary.filter(
      (card: card) => !machedInTitle.includes(card as never),
    ),
  ];

  const elementToHighlight = document.getElementById('3');
  console.log('Element to highlight: ', elementToHighlight);
  return (
    <div>
      <div className={styles.line}>
        <span className={styles.lineText}>
          Results: {foundCards.length ? foundCards.length : 0}
        </span>
      </div>
      <div className={styles.articlesContainer}>
        {foundCards.length
          ? foundCards.map((card) => (
              <Card key={card.id} card={card} setClickedCard={setClickedCard} />
            ))
          : cards.map((card) => (
              <Card key={card.id} card={card} setClickedCard={setClickedCard} />
            ))}
      </div>
    </div>
  );
};

export default Articles;
