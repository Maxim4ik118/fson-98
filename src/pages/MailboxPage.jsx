import { useEffect, useMemo, useState } from "react";
import { nanoid } from "nanoid";

import MailBox from "../components/MailBox/MailBox";
import MailBoxForm from "../components/MailBoxForm/MailBoxForm";

import meestExpressUsers from "../meesExpress.json";
// import novaPoshtaUsers from "./novaPoshta.json";
// import ukrPoshtaUsers from "./ukrPoshta.json";

function MailboxPage() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem("users");
    if (!stringifiedUsers) return meestExpressUsers;

    const parsedUsers = JSON.parse(stringifiedUsers);
    return parsedUsers;
  });
  const [filter, setFilter] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    setUsers((prevState) => [...prevState, finalUser]);
    // setUsers([...users, finalUser])
    // setUsers((prevUsers) => [...prevUsers, finalUser])
  };

  const onDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        return (
          user.userName.toLowerCase().includes(filter.toLowerCase()) ||
          user.userEmail.toLowerCase().includes(filter.toLowerCase())
        );
      }),
    [filter, users]
  );

  return (
    <div>
      <MailBoxForm onAddUser={onAddUser} />
      <section>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>
          Click to increment counter
        </button>
      </section>
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

export default MailboxPage;