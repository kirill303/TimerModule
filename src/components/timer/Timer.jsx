import React, { useMemo } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import start from "./start";
import './timer.css';
function Timer({ time, userStyle, text, description }) {

  const [remainder, setRemainder] = useState(time.split(':').map(e => +e));
  const style = useMemo(() => {
    console.log('e');
    return ({
      '--background1': userStyle.color1 || 'black',
      '--background2': userStyle.color2 || 'yellow',
      '--fontSizeTimer': userStyle.fontSize1 || '2em',
      '--fontSizeText': userStyle.fontSize2 || '1em',
      '--fontSizeDesription': userStyle.fontSize3 || '1em',
    })
  }, [])

  useEffect(() => start(remainder, setRemainder), []);
  return (
    <div className="timer-cont" style={style}>
      <p className="timer__text">
        {text}
      </p>
      <p className="timer__description">
        {description}
      </p>
      <div className="timer">
        {remainder && remainder.map((e, i) =>
          <li
            className={'timeP'}
            key={i}
          >
            {!i ? '' : ':'}
            {String(e).length === 1 ? `0${e}` : e}
          </li>)}
      </div>
    </div>
  );
}

export default Timer;
