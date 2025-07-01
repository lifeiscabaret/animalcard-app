import React from "react";

const AnimalForm = ({ updateMainAnimal }) => {

  const [value, setValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const hangul = (text) => /[ㄱ-ㅎ | ㅏ-ㅣ | 가-힣]/.test(text);


  function handleInputChange(data) {
    const userValue = data.target.value;
    setValue(userValue.toUpperCase());

    if (hangul(userValue)) {
      setErrorMessage('한글은 입력할 수 없습니다.');
    } else {
      setErrorMessage('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (value === '') {
      setErrorMessage('추가할 수 없습니다.');
      return;
    }
    setErrorMessage('');
    updateMainAnimal();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="귀여운 동물을 입력하세요."
        onChange={handleInputChange}
        value={value}
      />
      <button type="submit">추가</button>
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </form>
  );
}

export default AnimalForm;