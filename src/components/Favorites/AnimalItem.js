import Styles from './AnimalItem.module.css';

const AnimalItem = ({ src, alt }) => {
  return (
    <li className={Styles.listItem}>
      <img src={src} alt={alt} className={Styles.animalImage}/>
    </li>
  );
}
export default AnimalItem;