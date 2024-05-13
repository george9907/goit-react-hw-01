import userData from "../../userData.json"
import Profile from "../Profile/Profile"
import friends from "../../friends.json"
import FriendList from "../FriendList/FriendList"
import transactions from "../../transactions.json"
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import css from "./App.module.css"



export default function App() {
    return (
      <>
        <p className={css.ex}>Завдання 1</p>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
        />
        <p className={css.ex}>Завдання 2</p>
        <FriendList friends={friends} />
        <p className={css.ex}>Завдання 3</p>
        <TransactionHistory items={transactions} />
    </>
  );
}