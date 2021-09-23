import PropTypes from "prop-types";
import "../App";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li class="item" key={friend.id}>
          <span class="status">{friend.isOnline}</span>
          <img class="avatar" src={friend.avatar} alt="" width="48" />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
