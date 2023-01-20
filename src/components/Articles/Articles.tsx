import {FC} from 'react';
import {useStore} from '../../redux/store';
import Card from '../Card/Card';
import chooseCards from '../../utils/chooseCards';
import highlightor from '../../utils/highlightor';
import {hilightedCard} from '../../utils/types';
import styles from './Articles.module.scss';

interface ArticlesProps {
  filterChange: string;
  setClickedCard: (card: hilightedCard) => void;
}

const Articles: FC<ArticlesProps> = ({filterChange, setClickedCard}) => {
  const {articles: cards} = useStore();
  const hilightedCards = cards.map((card) => ({
    ...card,
    titleId: `title-${card.id}`,
    summaryId: `summary-${card.id}`,
  }));

  const machedInTitle = chooseCards(
    hilightedCards,
    filterChange.split(' '),
    'title',
  );

  const machedInSummary = chooseCards(
    hilightedCards,
    filterChange.split(' '),
    'summary',
  );

  const foundCards = [
    ...machedInTitle,
    ...machedInSummary.filter(
      (card: hilightedCard) => !machedInTitle.includes(card as never),
    ),
  ];

  if (foundCards.length) {
    const hilightIds: Array<string> = [];
    foundCards.forEach((foundCard) => {
      hilightIds.push(foundCard.titleId);
      hilightIds.push(foundCard.summaryId);
    });
    highlightor(hilightIds, ['#ff6'], null).apply(filterChange);
  }

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
          : hilightedCards.map((card) => (
              <Card key={card.id} card={card} setClickedCard={setClickedCard} />
            ))}
      </div>
    </div>
  );
};

export default Articles;
