const params = new URLSearchParams(window.location.search);
const videoKey = params.get("video");

const videoMap = {
  // Trending
  "trending1": { src: "assets/videos/trending1.mp4", title: "Firestorm", views: "2.1M views" },
  "trending2": { src: "assets/videos/trending2.mp4", title: "SkyBlaze", views: "1.7M views" },
  "trending3": { src: "assets/videos/trending3.mp4", title: "CyberRush", views: "1.5M views" },
  "trending4": { src: "assets/videos/trending4.mp4", title: "Neon Beats", views: "1.9M views" },
  "trending5": { src: "assets/videos/trending5.mp4", title: "DanceWave", views: "1.3M views" },

  // Horror
  "horror1": { src: "assets/videos/horror1.mp4", title: "Horror Movie 1", views: "1.3M views" },
  "horror2": { src: "assets/videos/horror2.mp4", title: "Horror Movie 2", views: "1.0M views" },
  "horror3": { src: "assets/videos/horror3.mp4", title: "Horror Movie 3", views: "1.5M views" },
  "horror4": { src: "assets/videos/horror4.mp4", title: "Horror Movie 4", views: "1.2M views" },
  "horror5": { src: "assets/videos/horror5.mp4", title: "Horror Movie 5", views: "1.7M views" },

  // Meditation
  "meditation1": { src: "assets/videos/meditation1.mp4", title: "Calm Waters", views: "1.4M views" },
  "meditation2": { src: "assets/videos/meditation2.mp4", title: "Zen Garden", views: "1.3M views" },
  "meditation3": { src: "assets/videos/meditation3.mp4", title: "Mind Cleanse", views: "1.1M views" },
  "meditation4": { src: "assets/videos/meditation4.mp4", title: "Peaceful Forest", views: "1.6M views" },
  "meditation5": { src: "assets/videos/meditation5.mp4", title: "Deep Breathe", views: "1.2M views" },

  // Drama
  "drama1": { src: "assets/videos/drama1.mp4", title: "Silent Rain", views: "1.6M views" },
  "drama2": { src: "assets/videos/drama2.mp4", title: "The Farewell", views: "1.1M views" },
  "drama3": { src: "assets/videos/drama3.mp4", title: "Last Letter", views: "970K views" },
  "drama4": { src: "assets/videos/drama4.mp4", title: "Tears of Time", views: "1.3M views" },
  "drama5": { src: "assets/videos/drama5.mp4", title: "BreakPoint", views: "1.0M views" },

  // Comedy
  "comedy1": { src: "assets/videos/comedy1.mp4", title: "Laughter Hour", views: "2.0M views" },
  "comedy2": { src: "assets/videos/comedy2.mp4", title: "Silly Circus", views: "1.4M views" },
  "comedy3": { src: "assets/videos/comedy3.mp4", title: "Meme King", views: "1.9M views" },
  "comedy4": { src: "assets/videos/comedy4.mp4", title: "Jokes on Us", views: "1.5M views" },
  "comedy5": { src: "assets/videos/comedy5.mp4", title: "Stand Up Wars", views: "1.8M views" },

  // Nature
  "nature1": { src: "assets/videos/nature1.mp4", title: "Ocean Bliss", views: "2.2M views" },
  "nature2": { src: "assets/videos/nature2.mp4", title: "Jungle Trails", views: "2.0M views" },
  "nature3": { src: "assets/videos/nature3.mp4", title: "Mountain Air", views: "1.6M views" },
  "nature4": { src: "assets/videos/nature4.mp4", title: "Rainy Moods", views: "1.9M views" },
  "nature5": { src: "assets/videos/nature5.mp4", title: "Desert Calm", views: "1.3M views" }
};

const player = document.getElementById("videoPlayer");
const source = document.getElementById("videoSource");
const title = document.getElementById("videoTitle");

if (videoKey && videoMap[videoKey]) {
  const videoData = videoMap[videoKey];

  source.src = videoData.src;
  title.textContent = videoData.title;
  player.load();

  // Save to watch history
  let history = JSON.parse(localStorage.getItem("watchHistory")) || [];

  // Prevent duplicate entries
  if (!history.some(item => item.title === videoData.title)) {
    history.push({ title: videoData.title, views: videoData.views });
    localStorage.setItem("watchHistory", JSON.stringify(history));
  }
} else {
  title.textContent = "Video Not Found";
}
