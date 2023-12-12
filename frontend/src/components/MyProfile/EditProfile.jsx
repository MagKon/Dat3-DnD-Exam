/* eslint-disable react/prop-types */
import "./style/EditProfile.css";

function EditProfile({ user, setUser }) {
  function save() {
    const username = document.getElementById("edit-username").value;
    const description = document.getElementById("edit-description").value;
    const newUser = {
      ...user,
      username: username === "" ? user.username : username,
      description: description === "" ? user.description : description,
    };

    setUser(newUser);
  }

  return (
    <div className="container row edit-profile-box">
      <h1>Edit Profile</h1>
      <div>Username</div>
      <input type="text" id="edit-username" className="col-2" />
      <div>Description</div>
      <textarea id="edit-description" />
      <button className="col-1 btn btn-primary" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default EditProfile;
