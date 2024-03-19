import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import MailBox from "./components/MailBox/MailBox";
import MailBoxForm from "./components/MailBoxForm/MailBoxForm";

import meestExpressUsers from "./meesExpress.json";
// import novaPoshtaUsers from "./novaPoshta.json";
// import ukrPoshtaUsers from "./ukrPoshta.json";

function App() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem("users");
    if (!stringifiedUsers) return meestExpressUsers;

    const parsedUsers = JSON.parse(stringifiedUsers);
    return parsedUsers;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const onAddUser = (formData) => {
    // formData -> {  "userEmail": "user@example.com" }
    // state -> { "id": "1", "userEmail": "user@example.com" }
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    setUsers((prevState) => [...prevState, finalUser]);
    // setUsers([...users, finalUser])
    // setUsers((prevUsers) => [...prevUsers, finalUser])
  };

  const onDeleteUser = (userId) => {
    // userId -> 2
    // [ {id: 1}, {id: 2}, {id: 3}]
    // [{id: 1}, {id: 3}]
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.userName.toLowerCase().includes(filter.toLowerCase()) ||
      user.userEmail.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <MailBoxForm onAddUser={onAddUser} />

      <section>
        <h2>Search users by email or username</h2>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={onChangeFilter}
        />
      </section>

      <MailBox
        users={filteredUsers}
        onDeleteUser={onDeleteUser}
        boxTitle="Meest Express"
      />
    </div>
  );
}

export default App;
