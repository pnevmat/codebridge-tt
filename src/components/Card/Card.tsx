import {FC} from 'react';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import {card} from '../../utils/types';
import moment from 'moment';
import styles from './Card.module.scss';

interface CardProps {
  card: card;
  setClickedCard: (card: card) => void;
}

const Card: FC<CardProps> = ({card, setClickedCard}) => {
  const shortenedCard = {
    id: card.id,
    imageUrl: card.imageUrl,
    publishedAt: moment(card.publishedAt).format('MMM DD YYYY'),
    summary: card.summary
      .split('')
      .filter((_, i) => i <= 99)
      .join(''),
    title: card.title
      .split('')
      .filter((_, i) => i <= 99)
      .join(''),
    url: card.url,
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
        <h3 className={styles.title} id="3">
          {card.title}
        </h3>
        <p className={styles.description} id="3">
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
