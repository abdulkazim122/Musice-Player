// Define the list of songs
const songs = [
    { title: "Adhuri Kahani", artist: "Emaran Hashmi", src: "Adhuri Kahani.mp3", cover: "cover1.jpg" },
    { title: "Kaise Bhula Du", artist: "Shubham", src: "Kaise Bhula Du.mp3", cover: "cover2.jpg" },
    { title: "Tere Sang", artist: "Anurag Nirmatker", src: "Tere sang.mp3", cover: "cover3.jpg" }
  ];
  
  let currentSongIndex = 0;
  
  // Get DOM elements
  const audio = document.getElementById('audio');
  const title = document.getElementById('title');
  const artist = document.getElementById('artist');
  const cover = document.getElementById('cover');
  const playButton = document.getElementById('play');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  // Load a song
  function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover; // Update the album art
  }
  
  // Play or pause the audio
  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playButton.textContent = 'Pause';
    } else {
      audio.pause();
      playButton.textContent = 'Play';
    }
  }
  
  // Go to the previous song
  function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
      currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
    playButton.textContent = 'Pause';
  }
  
  // Go to the next song
  function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
    playButton.textContent = 'Pause';
  }
  
  // Event listeners
  playButton.addEventListener('click', togglePlay);
  prevButton.addEventListener('click', prevSong);
  nextButton.addEventListener('click', nextSong);
  
  // Load the first song on page load
  loadSong(songs[currentSongIndex]);