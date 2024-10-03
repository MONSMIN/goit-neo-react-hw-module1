import styles from "./FriendListItem.module.css";


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={styles.friend}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={styles.friendName}>{name}</p>
            {isOnline ? (<p className={styles.online}>Online</p>) : (<p className={styles.offline}>Offline</p>)}
        </div>
    );
};

export default FriendListItem;