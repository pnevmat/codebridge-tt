import React, {FC} from 'react';
import styles from './Filter.module.scss';

interface FilterProps {
  setFilterchange: (text: string) => void;
}

const Filter: FC<FilterProps> = ({setFilterchange}) => {
  return (
    <div>
      <div>
        <label htmlFor="">
          <input
            type="text"
            onChange={(e) => setFilterchange(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Filter;
