import Player from '@vimeo/player';
import { throttle } from 'lodash'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_PLAYER_STORAGE = "videoplayer-current-time"

player.on('timeupdate', throttle(videoStop, 1000))

if(localStorage.getItem(VIDEO_PLAYER_STORAGE)) {
    player.setCurrentTime(localStorage.getItem(VIDEO_PLAYER_STORAGE))
}

function videoStop(event) {
    localStorage.setItem(VIDEO_PLAYER_STORAGE, event.seconds)
}