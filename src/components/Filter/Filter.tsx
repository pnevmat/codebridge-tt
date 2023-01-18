import {FC} from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styles from './Filter.module.scss';

interface FilterProps {
  setFilterchange: (text: string) => void;
}

const Filter: FC<FilterProps> = ({setFilterchange}) => {
  return (
    <div className={styles.container}>
      <label htmlFor="">
        <p className={styles.label}>Filter by keywords</p>
        <div className={styles.inputContainer}>
          <SearchOutlinedIcon />
          <input
            className={styles.input}
            type="text"
            placeholder="The most successful IT companies in 2020"
            onChange={(e) => setFilterchange(e.target.value)}
          />
        </div>
      </label>
    </div>
  );
};

export default Filter;
