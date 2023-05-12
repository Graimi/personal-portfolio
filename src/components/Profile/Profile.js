import './Profile.css';

// Template para crear el profile
function Profile(photo, name, surname) {
  return `
  <div class="profile">
    <img src="${photo}" alt="profile" />
    <div>
      <h3 class="profile-name">${name}</h3>
      <h3 class="profile-surname">${surname}</h3>
    </div>
  </div>
  `;
}

export default Profile;
