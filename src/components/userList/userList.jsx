import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  return (
    <div className="container">
      <h1>Команда</h1>
      <div className="users-list">
        {users
          ? users.map(user => (
              <Link key={user._id} className="users-list__user" to={`/users/${user._id}`}>
                <div className="user-list__photo-wrapper">
                  <img className="user-list__photo-img" alt="" src={user.photo} />
                </div>
                <div className="user-list__name">{user.name}</div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default UsersList;
