
import { useState } from "react";
import UploadWidget from "../../components/uploadWidget/uploadWidget";
import "./profileUpdatePage.scss";

function ProfileUpdatePage() {
  const [avatar, setAvatar] = useState(currentUser.avatar)
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img src="" alt="" className="avatar" />
        <UploadWidget uwConfig={{
          cloudName: "dc0poqt9l",
          uploadPreset: "estate",
          multiple: false,
          maxImageFileSize:200000,
          folder: "avatars",
        }} />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
