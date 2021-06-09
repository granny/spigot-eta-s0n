// pulled from https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API

// function to actually ask the permissions
function askNotificationPermission() {

  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log("This browser does not support notifications.");
  } else {
    if(checkNotificationPromise()) {
      Notification.requestPermission()
      .then((permission) => {
        handlePermission(permission);
      })
    } else {
      Notification.requestPermission(function(permission) {
        handlePermission(permission);
      });
    }
  }
}

function handlePermission(permission) {
  // set the button to shown or hidden, depending on what the user answers
  if(Notification.permission === 'denied' || Notification.permission === 'default') {
    $('#notification').css("display", "inline-block");
    $notifBtn.css("display", "inline-block");
  } else {
    $('#notification').css("display", "none");
    $notifBtn.css("display", "none");
  }
}

function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch(e) {
    return false;
  }

  return true;
}