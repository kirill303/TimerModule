import React from 'react';
import Timer from './components/timer/Timer';

export default function App(props) {
   const text = 'Успей купить новую поливайку всего за 100 рублей!';
   const description = 'До окончания акции осталось'
   const userStyle = {
      color1: 'black',
      color2: 'tomato',
      fontSize1: '3em',
      fontSize2: '1.5em',
      fontSize3: '0.5em'
   }

   return (
      <div className={'App'}>
         <Timer
            time={'1:0:10'}
            userStyle={userStyle}
            text={text}
            description={description}
         />
      </div>
   )
}