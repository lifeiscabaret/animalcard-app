import CatImages from './MainCard.module.css';

const MainCard = ({ src, alt, handleHeartClick, choiceFavorite }) => {

  const heartIcon = choiceFavorite ? '🍔' : '🍧';

  return (
    <div>
      <img src={src} alt={alt} className={CatImages.TitleImage} />
      <button onClick={handleHeartClick} className={CatImages.Button}>
        {heartIcon}</button>
    </div>
  );
}

export default MainCard;