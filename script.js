const audio = document.getElementById("musica");
const btn = document.getElementById("toggle-audio");
const icon = document.getElementById("audio-icon");

window.addEventListener("load", () => {
  playAudioSafe();
});

document.addEventListener("click", () => {
  playAudioSafe();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    audio.pause();
  } else {
    playAudioSafe();
  }
});
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleAudio();
});
function playAudioSafe() {
  if (audio && audio.paused) {
    audio.play(updateIcon()).catch(() => {});
  }
  else{
     audio.pause();
      updateIcon();
  }
}

function updateIcon() {
  icon.className = audio.paused ? "bi bi-play-fill" : "bi bi-pause-fill";
}
function toggleAudio() {
  if (audio.paused) {
    audio
      .play()
      .then(updateIcon)
      .catch(() => {});
  } else {
    audio.pause();
    updateIcon();
  }
}
