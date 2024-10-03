import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem.jsx";

const FriendList = ({ friends }) => {
    return (
      <ul className={styles.friendsList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    );
  };

export default FriendList;