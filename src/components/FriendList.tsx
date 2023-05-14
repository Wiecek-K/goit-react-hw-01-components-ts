import css from "../styles/FriendList.module.css";

type person = { avatar: string; name: string; isOnline: boolean; id: number };

type FriendListProps = { array: person[] };

const FriendList = ({ array }: FriendListProps) => {
  const friendList = array.map((friend) => (
    <li className={css.item}>
      <span className={friend.isOnline ? css.isOnline : css.isOffline}></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  ));
  return <ul className={css.friendList}>{friendList}</ul>;
};

export default FriendList;
