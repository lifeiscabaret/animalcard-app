import './App.css';
import React from 'react';
import PageTitle from './components/PageTitle';
import AnimalForm from './components/AnimalForm';
import MainCard from './components/MainCard';
import Favorites from './components/Favorites';


const jsonLocalStorage = {
  setItem: (key, value) => {
    console.log('localStroage.setItem) 실행');
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    console.log('localStroage.getItem) 실행');
    return JSON.parse(localStorage.getItem(key));
  },
};

function App() {

  console.log('**App 실행 **');

  const animal01 = "img/bear.png";
  const animal02 = "img/elephant.png";
  const animal03 = "img/fox.png";
  const animal04 = "img/rabbit.png";


  const [mainAnimal, setMainAnimal] = React.useState(animal04);
  const [favorites, setFavorites] = React.useState(() => {
    console.log('favaorites useState() 실행됨');
    return jsonLocalStorage.getItem('favorites') || [];
  });

  const [count, setCount]
    = React.useState(() => {
      console.log('count useState() 실행됨!!');
      return jsonLocalStorage.getItem('count') || 1;
    });

  const choiceFavorite = favorites.includes(mainAnimal);





  function incrementCount() {
    setCount((pre) => {
      const nextCount = pre + 1;
      console.log('nextCount >>', nextCount);

      localStorage.setItem('count', JSON.stringify(nextCount));
      console.log('>>>>setCount 실행 종료>>')
      return nextCount;
    });
  }

  function updateMainAnimal() {
    setMainAnimal(animal02);
    incrementCount();
  }


  function handleHeartClick() {
    console.log('하트 버튼 클릭');

    setFavorites((pre) => {
      const nextFavorites = [...pre, mainAnimal];
      localStorage.setItem('favorites', JSON.stringify(nextFavorites));
      return nextFavorites;
    });
  }






  return (
    <div>
      <PageTitle>{count} 👒🎆페이지🩰🎉</PageTitle>
      <AnimalForm updateMainAnimal={updateMainAnimal} />
      <MainCard
        src={mainAnimal}
        alt="아기 동물"
        handleHeartClick={handleHeartClick}
        choiceFavorite={choiceFavorite}
      />
      <Favorites favorites={favorites} />


    </div>
  );
}
export default App;
