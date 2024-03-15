import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const onlineStatus = clsx({
    [css["is-online"]]: isOnline,
    [css["is-offline"]]: !isOnline,
  });
  return (
    <div>
      <img
        className={css["friend-avatar-image"]}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p>{name}</p>
      <p className={onlineStatus}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
