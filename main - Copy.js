function logout() {
  alert('Logged out!');
  window.location.href = 'index.html';
}

window.onload = () => {
  const userInfo = document.getElementById('userInfo');
  if (userInfo) {
    userInfo.innerHTML = `<p>Name: Test User</p><p>Email: test@streamzone.com</p>`;
  }

  const historyList = document.getElementById('historyList');
  if (historyList) {
    historyList.innerHTML = `<li>Firestorm - Ep 1</li><li>Silent Rain - Ep 2</li>`;
  }
};
