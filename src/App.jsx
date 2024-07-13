import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickButton = () => {
    setNum(num + 1);
  }
  const Toggle = () => {
    setIsShowFace(!isShowFace);
  }
  useEffect(() => {
    if(num % 3 === 0){
      isShowFace || setIsShowFace(true);
    } else {
      isShowFace && setIsShowFace(false);
    }
  }, [num]);

  return (
    <>
      <p>a</p>
      <button onClick={onClickButton}>ボタン</button>
      <p>{ num }</p>

      <button onClick={Toggle}>on/off</button>
        {isShowFace && <p>表示</p>}
    </>
  );
}

export default App;
