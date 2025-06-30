<script>
  // Render user name
  const email = localStorage.getItem("userEmail");
  const name = localStorage.getItem("userName") || "User";

  document.querySelector("h2").textContent = `Welcome, ${name.toLowerCase()}`;

  // Watch history render
  const historyList = document.getElementById("watchHistory");
  const key = `watchHistory_${email}`;
  const history = JSON.parse(localStorage.getItem(key)) || [];

  // Clear history content
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

  // 🧹 Clear History Functionality
  const clearBtn = document.getElementById("clearHistoryBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      localStorage.removeItem(key);
      historyList.innerHTML = "<p>History cleared.</p>";
      alert("✅ Watch history cleared!");
    });
  }
</script>
