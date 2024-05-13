import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return<div className={css.container}>
 <div className={css.profileContainer}>
 <img className={css.image}
 src={image}
    alt="User avatar"
 />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
</div>

        <ul className={css.statsList}>
 <li className={css.listItem}>
<span className={css.itemText}>Followers</span>
<span className={css.itemNumb}>{stats.followers}</span>
 </li>
 <li className={css.listItem}>
<span className={css.itemText}>Views</span>
<span className={css.itemNumb}>{stats.views}</span>
 </li>
 <li className={css.listItem}>
<span className={css.itemText}>Likes</span>
<span className={css.itemNumb}>{stats.likes}</span>
</li>
</ul>
</div>
}