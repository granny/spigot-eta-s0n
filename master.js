let proxyUrl = 'https://cors-anywhere0.herokuapp.com/',
    targetUrl = 'https://hub.spigotmc.org/jenkins/view/RSS/job/Bukkit-RSS/api/json',
    nextBuild = 852
    $jebait = $('#jebait'),
    $notifBtn = $('#enable'),
    jebaitBool = true;

$notifBtn.click(askNotificationPermission);
if (!('Notification' in window)) {
    console.log("This browser does not support notifications.");
  } else {
      handlePermission();
  }

checkNextBuild(nextBuild);
setTime();
checkAusTime();
setInterval( () => {
    checkAusTime();
}, 1000);
setInterval( () => {
    if (jebaitBool) {
        checkNextBuild(nextBuild);
    }
}, 5000);

function checkNextBuild(buildNum) {
    $.getJSON(proxyUrl + targetUrl, (data) => {
        const bool = data.nextBuildNumber == buildNum;

        setTime();
        console.log((new Date()).getTime() + ' - is bukkit 1.17 here yet: ' + !bool);

        if (bool) {
            return;
        }
        $('#status').text('YEP :)');
        new Notification('SPIGOT 1.17 IS OUT', { body: 'WOOOOOOOOOO!', icon: 'https://cdn.betterttv.net/emote/5b1740221c5a6065a7bad4b5/3x' });
        console.log('BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO IT\'S OUTsdfffffffffffffbdxkjhbfgsdkjbjkfshdbkjfbhdksjfbsdkjbsdkjhbsdkjfbsdkhbsdkbfsdkjkksfdkhbjdsf');
        
        $('#audio-jebait')[0].play();
        if (jebaitBool) {
            $jebait.append($('<button id="audio">').text(($('#audio-jebait')[0].paused ? 'Play' : 'Pause') + ' Audio').click(btn => {
                if ($('#audio-jebait')[0].paused) {
                    $('#audio-jebait')[0].play();
                    $('#audio').text('Pause Audio');
                } else {
                    $('#audio').text('Play Audio');
                    $('#audio-jebait')[0].pause();
                }
            }));
            $jebait.append('<br>')
            for (let i = 0; i < 45; i++) {
              $jebait.append($('<img>').attr('src','https://cdn.betterttv.net/emote/5b1740221c5a6065a7bad4b5/3x'));
            }
            jebaitBool = false;
        }

    });
}

function checkAusTime() {
    const time = new Date().toLocaleString('en-US', {timeZone: 'Australia/Sydney'})
    $('#timeAus').text(time.replace(/^.+,/g, ' '));
}

function setTime() {
    const time = new Date().toLocaleString('en-US', {timeZone: 'Australia/Sydney'})
    $('#time').text(time.replace(/^.+,/g, ' '));
}
