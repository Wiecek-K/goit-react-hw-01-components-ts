import { FC } from "react";
import type { TPerson } from "../types";
import css from "./FriendList.module.css";

type TProps = { data: TPerson[] };

export const FriendList: FC<TProps> = ({ data }) => {
  const friendList = data.map((friend) => (
    <li className={css.item} key={friend.id}>
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
