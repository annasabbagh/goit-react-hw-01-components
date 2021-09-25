import "./App.css";
import Profile from "./components/Profile";
import user from "./data/user.json";
import Statistics from "./components/Statistics";
import statisticalData from "./data/statistical-data.json";
import FriendList from "./components/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
