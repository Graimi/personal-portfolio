import './Profile.css';

function Profile(src, name) {
  return `<div class="profile">
    <img src=${src} alt="profile" />
    <h3> ${name}
    </h3>
  </div>`;
}

export default Profile;
