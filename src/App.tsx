import {useState} from 'react';
import requests from './utils/apiRequests';

import Filter from './components/Filter/Filter';
import Articles from './components/Articles/Articles';
import ArticlePage from './components/ArticlePage/ArticlePage';
import {hilightedCard} from './utils/types';
import './App.scss';

function App() {
  const [filterChange, setFilterchange] = useState<string>('');
  const [clickedCard, setClickedCard] = useState<hilightedCard | null>(null);

  requests.getArticles({
    type: 'get',
    path: '/v3/articles',
    params: null,
  });

  return (
    <div>
      {!clickedCard ? (
        <div className="container">
          <Filter setFilterchange={setFilterchange} />
          <Articles
            filterChange={filterChange}
            setClickedCard={setClickedCard}
          />
        </div>
      ) : (
        <ArticlePage card={clickedCard} setClickedCard={setClickedCard} />
      )}
    </div>
  );
}

export default App;
