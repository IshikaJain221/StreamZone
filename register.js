document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  // Get values first
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const password = this.password.value;
  const gender = this.gender.value;

  // ✅ Clear old user's data before saving new one
  localStorage.clear();
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userName", name);
  localStorage.setItem("gender", gender);

  try {
   const res = await fetch("https://stream-zone-olive.vercel.app/api/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, password, gender })
});


    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Registration failed");
      return;
    }

    alert("✅ Registered successfully!");
    window.location.href = "browse.html";

  } catch (err) {
    console.error("❌ Registration error:", err);
    alert("Server error. Please try again later.");
  }
});
