import React, {useState} from 'react';
import Filter from './components/Filter/Filter';
import Articles from './components/Articles/Articles';
import {card} from './utils/types';
import './App.scss';

function App() {
  const [filterChange, setFilterchange] = useState<string>('');

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
    <div>
      <Filter setFilterchange={setFilterchange} />
      <Articles cards={foundCards.length ? foundCards : cards} />
    </div>
  );
}

export default App;
