import query from "query-string";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../API";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import User from "../user/user";
import UserList from "../userList/userList";

const Users = ({ crumbs, location }) => {
  const { userId } = useParams();
  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then(data => setUsers(data));
  }, []);

  const search = query.parse(location.search);
  if (search?.favorites === "true") {
    console.log("отображаем избранных");
  }

  let currentUser = users ? users.find(user => userId === user._id) : null;

  return (
    <>
      {crumbs && <Breadcrumbs crumbs={crumbs} specify={currentUser && currentUser.name} />}
      {userId ? <User id={userId} /> : <UserList users={users} />}
    </>
  );
};

export default Users;
