const avatar = document.querySelector('.menu-avatar');

async function changeAvatar() {
  const response = await fetch('https://api.github.com/users/joselucasb');

  const { avatar_url } = await response.json();

  avatar.setAttribute('src', avatar_url);
}

window.addEventListener('load', changeAvatar);
