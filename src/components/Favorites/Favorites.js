import AnimalItem from "./AnimalItem";
import Styles from './Favorites.module.css';

const Favorites = ({ favorites }) => {
  return (
    <ul className={Styles.favorites}>
      {favorites.map((animal, index) => <AnimalItem src={animal} key={index}  />)}
    </ul>
  );
}

export default Favorites;