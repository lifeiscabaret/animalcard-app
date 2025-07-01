const MainCard = ({ src, alt, handleHeartClick, choiceFavorite }) => {
  const heartIcon = choiceFavorite ? '👧🏻' : '🏄🏻‍♀️';
  console.log('이모지>>', heartIcon)
  return (
    <div className="main-card">
      <img src={src} alt={alt} width="400px" />
      <button onClick={handleHeartClick}>{heartIcon}</button>
    </div>
  );
};

export default MainCard;