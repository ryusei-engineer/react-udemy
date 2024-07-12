import './App.css';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  const onClickButton = () => {
    setNum(num + 1);
  }
  const Toggle = () => {
    setIsShowFace(!isShowFace);
  }

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
