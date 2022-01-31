export default function start(remainder, setRemainder) {
   const g = setInterval(() => {
      let h = remainder;
      if (!h[0] && !h[1] && !h[2]) {
         h = ['Конец'];
         clearInterval(g);
      } else if (h[2]) {
         h[2]--;
      } else if (!h[2]) {
         if (h[1]) {
            h[1]--;
            h[2] = 59;
         } else if (h[0]) {
            h[0]--
            h[1] = 59;
            h[2] = 59;
         }
      }
      setRemainder(JSON.parse(JSON.stringify(h)));
   }, 1000)
}