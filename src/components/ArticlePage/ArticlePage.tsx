import {FC} from 'react';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import {card} from '../../utils/types';
import styles from './ArticlePage.module.scss';

interface ArticlePageProps {
  card: card | null;
  setClickedCard: (card: null) => void;
}

const ArticlePage: FC<ArticlePageProps> = ({card, setClickedCard}) => {
  return (
    <div className={styles.container}>
      <div>
        <div
          className={styles.image}
          style={{backgroundImage: `url(${card?.imageUrl})`}}
        />
      </div>
      <div className={styles.articleContainer}>
        <h3 className={styles.title}>{card?.title}</h3>
        <span className={styles.text}>{card?.summary}</span>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.homeBtn} onClick={() => setClickedCard(null)}>
          <StraightOutlinedIcon />
          <span className={styles.homeBtnText}>Back to homepage</span>
        </button>
      </div>
    </div>
  );
};

export default ArticlePage;
