import styles from "./Profile.module.css";

const Profile = ({
    name,
    tag,
    image,
    location,
    stats
}) => {
    return (
        <div className={styles.profile}>
            <div>
                <img className={styles.avatar} src={image} alt="User avatar"/>
                <p className={styles.username}>{name}</p>
                <p className={styles.userinfo}>{tag}</p>
                <p className={styles.userinfo}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>

        </div>
    )
}

export default Profile;