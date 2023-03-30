import Player from '@vimeo/player';
const _ = require('lodash');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const lastStop = Number(localStorage.getItem('videoplayer-current-time'));

if (lastStop) {
  player.setCurrentTime(lastStop);
}

const handler = _.throttle(event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
  console.log(event.seconds);
}, 1000);

player.on('timeupdate', handler);
