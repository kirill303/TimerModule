export default function logParam({ type, date,thisDate, color, text, description }) {
   console.log('type:' + type,
      '\nDate:' + date,
      '\nthisDate: '+ thisDate, 
      '\ncolors: ' + color.color1 + ', ' + color.color2,
      '\ntext: ' + text,
      '\description: '+description);
}