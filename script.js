// Select the video element and the text box
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textbox");

// Array of video sources for toggling
const videoSources = ["videos/Truism_compressed.mp4", 
     "videos/Truism2_compressed.mp4",
    "videos/Truism3_compressed.mp4",
    "videos/Truism4_compressed.mp4",
    "videos/Truism5_compressed.mp4"];

// Current video index, starting with the first video
let currentVideoIndex = 0;

// Array to store the playback time for each video
const videoTimes = [0, 0, 0, 0, 0];

function getRandomIndex() {
    let newIndex;
    do {
    newIndex = Math.floor(Math.random() * videoSources.length);
    } while (newIndex === currentVideoIndex);
    return newIndex
    }

function toggleVideo() {
    videoTimes[currentVideoIndex] = videoPlayer.currentTime;
    currentVideoIndex = getRandomIndex();

    videoPlayer.muted = false;

    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.load();
    }

// Add a click event to the text box to switch videos
textBox.addEventListener("click", toggleVideo);

videoPlayer.addEventListener("loadedmetadata"), function() {
    videoPlayer.currentTime = videoTimes[currentVideoIndex];
    videoPlayer.play();
}