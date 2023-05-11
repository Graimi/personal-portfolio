import './Profile.css';

function Profile(src, name, surname) {
  return `<div class="profile">
    <img src=${src} alt="profile" />
    <div>
    <h3 class="profile-name"> ${name} </h3>
    <h3 class="profile-surname"> ${surname} </h3>
    </div>
  </div>`;
}

export default Profile;
