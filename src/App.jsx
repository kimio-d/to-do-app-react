import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickFaceSwitch = () => {
    faceShowFlag ? setFaceShowFlag(false) : setFaceShowFlag(true);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    console.log("useEffect!");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは★</h1>

      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ！</button>
      <br />
      <button onClick={onClickFaceSwitch}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( *´艸｀)</p>}
    </>
  );
};

export default App;
