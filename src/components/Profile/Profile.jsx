import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css["container-profile"]}>
      <div>
        <img src={image} alt="User avatar" className={css["profile-avatar"]} />
        <p className={css["profile-name"]}>{name}</p>
        <p className={css["profile-tag"]}>@{tag}</p>
        <p className={css["profile-location"]}>{location}</p>
      </div>
      <ul className={css["profile-stats"]}>
        <li className={css["profile-stats-items"]}>
          <span className={css["stats-title"]}>Followers</span>
          <span className={css["stats-amount"]}>{stats.followers}</span>
        </li>
        <li className={css["profile-stats-items"]}>
          <span className={css["stats-title"]}>Views</span>
          <span className={css["stats-amount"]}>{stats.views}</span>
        </li>
        <li className={css["profile-stats-items"]}>
          <span className={css["stats-title"]}>Likes</span>
          <span className={css["stats-amount"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
