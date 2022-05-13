function bgm {
  document.getElementById('bgm()').volume = 0.2;
  const audio = document.getElementById('bgm()');
  const playlist = ['Audio/jazzy-abstract-beat.mp3', 'Audio/Jazzy_Music1.mp3'];
  let current = 0;

  // Loads next song

  audio.onended = () => {
    current++;
    if (current >= playlist.length) { current = 0; }
    audio.src = playlist[current];
    audio.pause();
    audio.load();
    audio.play();
  };
}


