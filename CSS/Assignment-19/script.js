document.addEventListener("DOMContentLoaded", function() {
    const muteButton = document.getElementById('muteButton');
    const stopVideoButton = document.getElementById('stopVideoButton');
    const shareScreenButton = document.getElementById('shareScreenButton');
    const endCallButton = document.getElementById('endCallButton');
    const sendMessageButton = document.getElementById('sendMessageButton');
    const messageInput = document.getElementById('messageInput');
    const messages = document.getElementById('messages');
    const settingsButton = document.getElementById('settingsButton');
    const saveSettingsButton = document.getElementById('saveSettingsButton');
    const userNameInput = document.getElementById('userNameInput');

    const videos = document.querySelectorAll('video');
    let isMuted = false;
    let isVideoStopped = false;
    let userName = "Anonymous";

    muteButton.addEventListener('click', function() {
        isMuted = !isMuted;
        videos.forEach(video => {
            video.muted = isMuted;
        });
        muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
    });

    stopVideoButton.addEventListener('click', function() {
        isVideoStopped = !isVideoStopped;
        videos.forEach(video => {
            if (isVideoStopped) {
                video.pause();
            } else {
                video.play();
            }
        });
        stopVideoButton.textContent = isVideoStopped ? 'Start Video' : 'Stop Video';
    });

    shareScreenButton.addEventListener('click', function() {
        alert('Share Screen functionality is not implemented in this demo.');
    });

    endCallButton.addEventListener('click', function() {
        alert('End Call functionality is not implemented in this demo.');
    });

    sendMessageButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message !== "") {
            const messageElement = document.createElement('div');
            messageElement.textContent = `${userName}: ${message}`;
            messages.appendChild(messageElement);
            messageInput.value = "";
            messages.scrollTop = messages.scrollHeight;
        }
    });

    messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessageButton.click();
        }
    });

    settingsButton.addEventListener('click', function() {
        $('#settingsModal').modal('show');
    });

    saveSettingsButton.addEventListener('click', function() {
        userName = userNameInput.value.trim() || "Anonymous";
        $('#settingsModal').modal('hide');
    });
});
