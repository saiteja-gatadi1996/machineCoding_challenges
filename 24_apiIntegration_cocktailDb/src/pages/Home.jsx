import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import React from 'react';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
