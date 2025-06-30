// auth.js - dummy authentication logic
document.getElementById('loginForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Logged in!');
  window.location.href = 'browse.html';
});

document.getElementById('registerForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Registered!');
  window.location.href = 'login.html';
});
