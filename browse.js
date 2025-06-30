// === CATEGORY CONTAINERS ===
const categories = {
  Trending: document.getElementById('trending'),
  Drama: document.getElementById('drama'),
  Meditation: document.getElementById('meditation'),
  Comedy: document.getElementById('comedy'),
  Horror: document.getElementById('horror'),
  Nature: document.getElementById('nature'),
  History: document.getElementById('historyContainer') // For watch history
};

// === VIDEO LIST ===
const videos = [
  // 🔥 Trending
  { title: "Firestorm", genre: "Trending", thumbnail: "assets/thumbnails/trending1.jpg", video: "watch.html?video=trending1", rating: 4.5, description: "An intense cyber action saga with futuristic tech battles.", views: "2.1M views" },
  { title: "SkyBlaze", genre: "Trending", thumbnail: "assets/thumbnails/trending2.jpg", video: "watch.html?video=trending2", rating: 4.3, description: "Jetpacks, drones, and wild sky races!", views: "1.7M views" },
  { title: "CyberRush", genre: "Trending", thumbnail: "assets/thumbnails/trending3.jpg", video: "watch.html?video=trending3", rating: 4.0, description: "A high-speed chase through neon streets.", views: "1.5M views" },
  { title: "Neon Beats", genre: "Trending", thumbnail: "assets/thumbnails/trending4.jpg", video: "watch.html?video=trending4", rating: 4.4, description: "Rhythmic visuals meet electric soundscapes.", views: "1.9M views" },
  { title: "DanceWave", genre: "Trending", thumbnail: "assets/thumbnails/trending5.jpg", video: "watch.html?video=trending5", rating: 4.2, description: "Dance meets story in a cyber world.", views: "1.3M views" },

  // 🎭 Drama
  { title: "Silent Rain", genre: "Drama", thumbnail: "assets/thumbnails/drama1.jpg", video: "watch.html?video=drama1", rating: 4.6, description: "A heartfelt love story in the monsoons.", views: "1.6M views" },
  { title: "The Farewell", genre: "Drama", thumbnail: "assets/thumbnails/drama2.jpg", video: "watch.html?video=drama2", rating: 4.3, description: "Saying goodbye isn't always easy.", views: "1.1M views" },
  { title: "Last Letter", genre: "Drama", thumbnail: "assets/thumbnails/drama3.jpg", video: "watch.html?video=drama3", rating: 4.2, description: "A letter that changes everything.", views: "970K views" },
  { title: "Tears of Time", genre: "Drama", thumbnail: "assets/thumbnails/drama4.jpg", video: "watch.html?video=drama4", rating: 4.4, description: "Unfolding tragedy across generations.", views: "1.3M views" },
  { title: "BreakPoint", genre: "Drama", thumbnail: "assets/thumbnails/drama5.jpg", video: "watch.html?video=drama5", rating: 4.1, description: "A tennis star’s emotional downfall.", views: "1.0M views" },

  // 🧘 Meditation
  { title: "Calm Waters", genre: "Meditation", thumbnail: "assets/thumbnails/meditation1.jpg", video: "watch.html?video=meditation1", rating: 4.8, description: "Relaxing ocean waves and tranquility.", views: "1.4M views" },
  { title: "Zen Garden", genre: "Meditation", thumbnail: "assets/thumbnails/meditation2.jpg", video: "watch.html?video=meditation2", rating: 4.7, description: "Peaceful zen garden visuals.", views: "1.3M views" },
  { title: "Mind Cleanse", genre: "Meditation", thumbnail: "assets/thumbnails/meditation3.jpg", video: "watch.html?video=meditation3", rating: 4.6, description: "Clear your mind with focused breathing.", views: "1.1M views" },
  { title: "Peaceful Forest", genre: "Meditation", thumbnail: "assets/thumbnails/meditation4.jpg", video: "watch.html?video=meditation4", rating: 4.9, description: "Birdsong and forest breeze therapy.", views: "1.6M views" },
  { title: "Deep Breathe", genre: "Meditation", thumbnail: "assets/thumbnails/meditation5.jpg", video: "watch.html?video=meditation5", rating: 4.5, description: "Guided deep breathing session.", views: "1.2M views" },

  // 😂 Comedy
  { title: "Laughter Hour", genre: "Comedy", thumbnail: "assets/thumbnails/comedy1.jpg", video: "watch.html?video=comedy1", rating: 4.7, description: "Stand-up comedy that hits hard!", views: "2.0M views" },
  { title: "Silly Circus", genre: "Comedy", thumbnail: "assets/thumbnails/comedy2.jpg", video: "watch.html?video=comedy2", rating: 4.2, description: "Clown chaos and hilarious stunts.", views: "1.4M views" },
  { title: "Meme King", genre: "Comedy", thumbnail: "assets/thumbnails/comedy3.jpg", video: "watch.html?video=comedy3", rating: 4.6, description: "When meme lords go live!", views: "1.9M views" },
  { title: "Jokes on Us", genre: "Comedy", thumbnail: "assets/thumbnails/comedy4.jpg", video: "watch.html?video=comedy4", rating: 4.4, description: "Skit-based hilarity with a twist.", views: "1.5M views" },
  { title: "Stand Up Wars", genre: "Comedy", thumbnail: "assets/thumbnails/comedy5.jpg", video: "watch.html?video=comedy5", rating: 4.3, description: "Rival comedians battle for laughs.", views: "1.8M views" },

  // 👻 Horror
  { title: "Dark Hours", genre: "Horror", thumbnail: "assets/thumbnails/horror1.jpg", video: "watch.html?video=horror1", rating: 4.1, description: "A haunted town with deadly secrets.", views: "1.3M views" },
  { title: "Nightmare Lane", genre: "Horror", thumbnail: "assets/thumbnails/horror2.jpg", video: "watch.html?video=horror2", rating: 4.0, description: "Once you sleep... it begins.", views: "1.0M views" },
  { title: "Dead Whisper", genre: "Horror", thumbnail: "assets/thumbnails/horror3.jpg", video: "watch.html?video=horror3", rating: 4.3, description: "Ghosts that talk through radios.", views: "1.5M views" },
  { title: "Black Mirror", genre: "Horror", thumbnail: "assets/thumbnails/horror4.jpg", video: "watch.html?video=horror4", rating: 4.2, description: "Paranormal tech that watches you.", views: "1.2M views" },
  { title: "Behind You", genre: "Horror", thumbnail: "assets/thumbnails/horror5.jpg", video: "watch.html?video=horror5", rating: 4.5, description: "Never look back.", views: "1.7M views" },

  // 🌿 Nature
  { title: "Ocean Bliss", genre: "Nature", thumbnail: "assets/thumbnails/nature1.jpg", video: "watch.html?video=nature1", rating: 4.9, description: "Soothing waves and sunsets.", views: "2.2M views" },
  { title: "Jungle Trails", genre: "Nature", thumbnail: "assets/thumbnails/nature2.jpg", video: "watch.html?video=nature2", rating: 4.8, description: "Raw rainforest beauty.", views: "2.0M views" },
  { title: "Mountain Air", genre: "Nature", thumbnail: "assets/thumbnails/nature3.jpg", video: "watch.html?video=nature3", rating: 4.7, description: "Breathe in alpine freshness.", views: "1.6M views" },
  { title: "Rainy Moods", genre: "Nature", thumbnail: "assets/thumbnails/nature4.jpg", video: "watch.html?video=nature4", rating: 4.6, description: "Rainfall & misty ambience.", views: "1.9M views" },
  { title: "Desert Calm", genre: "Nature", thumbnail: "assets/thumbnails/nature5.jpg", video: "watch.html?video=nature5", rating: 4.4, description: "Stillness of golden dunes.", views: "1.3M views" }
];

// === RENDER VIDEO ===
function renderVideo(video, target) {
  const container = document.createElement('div');
  container.classList.add('video-tile');

  const img = document.createElement('img');
  img.src = video.thumbnail;
  img.alt = video.title;
  img.onclick = () => {
    saveToHistory(video);
    window.location.href = video.video;
  };

  const overlay = document.createElement('div');
  overlay.classList.add('rating-overlay');
  overlay.textContent = `⭐ ${video.rating}`;

  const infoBox = document.createElement('div');
  infoBox.classList.add('info-box');
  infoBox.innerHTML = `<strong>${video.title}</strong><br>${video.description}<br>👁️ ${video.views}`;

  container.appendChild(img);
  container.appendChild(overlay);
  container.appendChild(infoBox);

  target.appendChild(container);
}

// === SAVE TO HISTORY ===
function saveToHistory(video) {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  const key = `watchHistory_${email}`;
  let history = JSON.parse(localStorage.getItem(key)) || [];

  if (!history.find((v) => v.title === video.title)) {
    history.push(video);
    localStorage.setItem(key, JSON.stringify(history));
  }
}

// === RENDER WATCH HISTORY ===
function renderWatchHistory() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  const key = `watchHistory_${email}`;
  const history = JSON.parse(localStorage.getItem(key)) || [];

  const container = document.getElementById('historyContainer');
  container.innerHTML = '';

  if (history.length === 0) {
    container.innerHTML = "<p>No watch history yet.</p>";
    return;
  }

  history.forEach((video) => renderVideo(video, container));
}

// === INITIAL RENDER OF ALL VIDEOS ===
videos.forEach((video) => {
  const section = categories[video.genre];
  if (section) renderVideo(video, section);
});

// === GENRE DROPDOWN SCROLL ===
document.getElementById("genreDropdown").addEventListener("change", function () {
  const section = document.getElementById(this.value);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
});

// === SEARCH FUNCTIONALITY ===
document.getElementById('search').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  Object.values(categories).forEach(section => section.innerHTML = '');

  videos.forEach(video => {
    if (video.title.toLowerCase().includes(term)) {
      renderVideo(video, categories[video.genre]);
    }
  });

  renderWatchHistory(); // Optional: Keep history visible during search
});

// === ON LOAD ===
renderWatchHistory();


window.addEventListener("DOMContentLoaded", () => {
  const email = localStorage.getItem("userEmail");  
  const name = localStorage.getItem("userName") || "User";

  document.querySelector("h2").textContent = `Welcome, ${name.toLowerCase()}`;

  const historyList = document.getElementById("watchHistory");
  const key = `watchHistory_${email}`;
  const history = JSON.parse(localStorage.getItem(key)) || [];

  

  // Clear old list
  historyList.innerHTML = "";

  if (history.length === 0) {
    historyList.innerHTML = "<p>No videos watched yet.</p>";
  } else {
    history.forEach((video) => {
      const item = document.createElement("div");
      item.classList.add("history-item");
      item.innerHTML = `<strong>${video.title}</strong> - ${video.views}`;
      historyList.appendChild(item);
    });
  }
});
