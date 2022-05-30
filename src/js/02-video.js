
    import Player from '@vimeo/player';

    const throttle = require('lodash.throttle');
    
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(saveWatchTime, 1000));

    function saveWatchTime(e){
        localStorage.setItem(`videoplayer-current-time`, e.seconds);
    }

    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
   
