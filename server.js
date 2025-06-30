// server.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded videos and thumbnails
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure required folders exist
fs.mkdirSync(path.join(__dirname, 'uploads/videos'), { recursive: true });
fs.mkdirSync(path.join(__dirname, 'uploads/thumbnails'), { recursive: true });
fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });

// -------------------- REGISTRATION --------------------
app.post('/api/register', (req, res) => {
  const { name, email, password, gender } = req.body;

  if (!name || !email || !password || !gender) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const usersFile = path.join(__dirname, 'data', 'users.json');
  let users = [];

  if (fs.existsSync(usersFile)) {
    users = JSON.parse(fs.readFileSync(usersFile));
  }

  if (users.find(u => u.email === email)) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  const newUser = { name, email, password, gender };
  users.push(newUser);
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  res.json({ message: '✅ User registered successfully' });
});

// -------------------- PROFILE FETCH --------------------
app.get('/api/profile/:email', (req, res) => {
  const email = req.params.email;
  const usersFile = path.join(__dirname, 'data', 'users.json');

  if (!fs.existsSync(usersFile)) {
    return res.status(404).json({ error: 'User not found' });
  }

  const users = JSON.parse(fs.readFileSync(usersFile));
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// -------------------- VIDEO UPLOAD --------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = file.mimetype.startsWith('video') ? 'uploads/videos' : 'uploads/thumbnails';
    cb(null, path.join(__dirname, folder));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

app.post('/api/upload', upload.fields([
  { name: 'video', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 }
]), (req, res) => {
  const { title, genre } = req.body;
  const videoFile = req.files['video']?.[0];
  const thumbnailFile = req.files['thumbnail']?.[0];

  if (!title || !genre || !videoFile || !thumbnailFile) {
    return res.status(400).json({ error: 'Missing fields or files.' });
  }

  const videoData = {
    title,
    genre,
    videoPath: videoFile.filename,
    thumbnailPath: thumbnailFile.filename
  };

  const videoJsonPath = path.join(__dirname, 'data', 'videos.json');
  let videos = [];

  if (fs.existsSync(videoJsonPath)) {
    videos = JSON.parse(fs.readFileSync(videoJsonPath));
  }

  videos.push(videoData);
  fs.writeFileSync(videoJsonPath, JSON.stringify(videos, null, 2));

  res.json({ message: '✅ Video uploaded successfully', video: videoData });
});

// -------------------- VIDEO FETCH (all) --------------------
app.get('/api/videos', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'videos.json');

  if (!fs.existsSync(filePath)) {
    return res.json([]);
  }

  const videos = JSON.parse(fs.readFileSync(filePath));
  res.json(videos);
});

// -------------------- FALLBACK FOR INVALID ROUTES --------------------
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// -------------------- SERVER LISTEN --------------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
