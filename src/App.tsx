import { FriendList } from "./components/FriendList";
import { Statistics } from "./components/Statistics";
import { TransactionHistory } from "./components/TransactionHistory";

import data from "./data/data.json";
import friendsJSON from "./data/friends.json";
import transactionsJSON from "./data/transactions.json";

function App() {
  return (
    <>
      <Statistics title={"Upload Stats"} stats={data}></Statistics>
      <FriendList data={friendsJSON}></FriendList>
      <TransactionHistory data={transactionsJSON}></TransactionHistory>
    </>
  );
}

export default App;
