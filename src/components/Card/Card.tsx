import {FC} from 'react';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import {hilightedCard} from '../../utils/types';
import moment from 'moment';
import styles from './Card.module.scss';

interface CardProps {
  card: hilightedCard;
  setClickedCard: (card: hilightedCard) => void;
}

const Card: FC<CardProps> = ({card, setClickedCard}) => {
  const shortenedCard = {
    ...card,
    publishedAt: moment(card.publishedAt).format('MMM DD YYYY'),
    summary: card.summary
      .split('')
      .filter((_, i) => i <= 99)
      .join(''),
    title: card.title
      .split('')
      .filter((_, i) => i <= 99)
      .join(''),
  };

  return (
    <div className={styles.container} onClick={() => setClickedCard(card)}>
      <div>
        <img className={styles.image} src={shortenedCard.imageUrl} alt="" />
      </div>
      <div className={styles.cardTextContainer}>
        <div className={styles.dateContainer}>
          <CalendarTodayOutlinedIcon />
          <span className={styles.date}>{shortenedCard.publishedAt}</span>
        </div>
        <h3 className={styles.title} id={shortenedCard.titleId || ''}>
          {card.title}
        </h3>
        <p className={styles.description} id={shortenedCard.summaryId || ''}>
          {shortenedCard.summary}
        </p>
        <button
          className={styles.readMoreBtn}
          onClick={() => setClickedCard(card)}>
          <span className={styles.readMoreBtnText}>Read more</span>
          <StraightOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Card;
