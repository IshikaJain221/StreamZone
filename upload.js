document.getElementById("uploadForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", document.getElementById("title").value);
  formData.append("genre", document.getElementById("genre").value);
  formData.append("video", document.getElementById("videoFile").files[0]);
  formData.append("thumbnail", document.getElementById("thumbnailFile").files[0]);

  try {
    const res = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Video uploaded successfully!");
    } else {
      alert("❌ Upload failed: " + data.error);
    }
  } catch (err) {
    alert("⚠️ Error uploading video.");
    console.error(err);
  }
});
