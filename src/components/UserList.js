import React, { useEffect, useContext } from "react";
import UserContext from "../context/User/UserContext";

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="list-group h-100">
        {users.map((user) => (
          <a
            className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
            onClick={() => getProfile(user.id)}
            href="#!"
            key={user.id}
          >
              <img src={user.avatar} className="img-fluid mr-4 rounded-circle" width="70" />
              <p>{`${user.first_name} ${user.last_name}`}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UserList;
