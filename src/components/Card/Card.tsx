import React, {FC} from 'react';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import {card} from '../../utils/types';
import styles from './Card.module.scss';

interface CardProps {
  card: card;
  setClickedCard: (card: card) => void;
}

const Card: FC<CardProps> = ({card, setClickedCard}) => {
  return (
    <div className={styles.container} onClick={() => setClickedCard(card)}>
      <div>
        <img className={styles.image} src={card.image} alt="" />
      </div>
      <div className={styles.cardTextContainer}>
        <div className={styles.dateContainer}>
          <CalendarTodayOutlinedIcon />
          <span className={styles.date}>{card.date}</span>
        </div>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.description}>{card.description}</p>
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
