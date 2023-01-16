import React, {useState} from 'react';
import Filter from './components/Filter/Filter';
import Articles from './components/Articles/Articles';
import ArticlePage from './components/ArticlePage/ArticlePage';
import {card} from './utils/types';
import './App.scss';

function App() {
  const [filterChange, setFilterchange] = useState<string>('');
  const [clickedCard, setClickedCard] = useState<card | null>(null);

  const cards: Array<card> = [
    {
      id: '1',
      image: 'www.google.com',
      date: '15.01.2023',
      title: 'Some title',
      description: 'Description of article',
    },
  ];
  const foundCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(filterChange.toLowerCase()) ||
      card.description.toLowerCase().includes(filterChange.toLowerCase()),
  );
  return (
    <div className="container">
      {!clickedCard ? (
        <div>
          <Filter setFilterchange={setFilterchange} />
          <div className="line">
            <span className="lineText">
              Results: {foundCards.length ? foundCards.length : 0}
            </span>
          </div>
          <Articles
            cards={foundCards.length ? foundCards : cards}
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
