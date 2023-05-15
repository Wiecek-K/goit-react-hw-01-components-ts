// import Heading from "./components/Heading";
// import { Section } from "./components/Section";
// import Counter from "./components/Counter";
// import List from "./components/List";
import FriendList from "./components/FriendList";
import Statistics from "./components/Statistics";
import TransactionHistory from "./components/TransactionHistory";

import data from "./data/data.json";
import friendsJSON from "./data/friends.json";
import transactionsJSON from "./data/transactions.json";
// import { useState } from "react";
function App() {
  // const[count,setCount]=useState<number>(1)

  return (
    <>
      <Statistics title={"Upload Stats"} stats={data}></Statistics>
      <FriendList array={friendsJSON}></FriendList>
      <TransactionHistory data={transactionsJSON}></TransactionHistory>
      {/* <Heading title={"Hello"} /> */}
      {/* <Section title={"Diff Title"}>This is my Section</Section> */}
      {/* <Counter setCount={setCount}> */}
      {/* Count is {count}</Counter> */}
      {/* <List items={["Coffe","Tacos","Code"]} render={(item:string)=><span className="gold">{item}</span>}/> */}
    </>
  );
}

export default App;