let proxyUrl = 'https://cors-anywhere0.herokuapp.com/',
    targetUrl = 'https://hub.spigotmc.org/jenkins/view/RSS/job/Bukkit-RSS/api/json',
    nextBuild = 723
    $jebait = $('#jebait');

checkNextBuild(nextBuild);
checkTime();
setInterval( () => {
    checkNextBuild(nextBuild);
    checkTime();
}, 5000);

function checkNextBuild(buildNum) {
    $.getJSON(proxyUrl + targetUrl, (data) => {
        if (data.nextBuildNumber == buildNum) {
            return;
        }
        $('#status').text('YEP :)');
        
        $('#audio-jebait')[0].play();
        $jebait.append($('<button>').text('Pause Audio').click(()=>$('#audio-jebait')[0].pause()));
        $jebait.append('<br>')
        for (let i = 0; i < 45; i++) {
          $jebait.append($('<img>').attr('src','https://cdn.betterttv.net/emote/5b1740221c5a6065a7bad4b5/3x'));
        }
    });
}

function checkTime() {
    let time = new Date().toLocaleString('en-US', {timeZone: 'Australia/Sydney'})
    $('#time').text(time.replace(/^.+,/g, ' '));
}