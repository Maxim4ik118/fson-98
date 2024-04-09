import { useEffect, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from 'react-redux'

import MailBox from "../components/MailBox/MailBox";
import MailBoxForm from "../components/MailBoxForm/MailBoxForm";

import meestExpressUsers from "../meesExpress.json";
// import novaPoshtaUsers from "./novaPoshta.json";
// import ukrPoshtaUsers from "./ukrPoshta.json";

/*
Алгоритм встановлення і роботи з редаксом.

1. Встановити бібліотеки redux and redux-toolkit
2. Створити store та підключити його до <Provider>...</Provider>
3. Створили базовий редьюсер та продумали його початковий стан (INITIAL_STATE).
4. Підписалися на дані з стору прямо в компоненті за допомогою (useSelector).
5. Продумали, як буде виглядати наш об'єкт інструкції(action) та що йому потрібно.
6. Отримали функцію dispatch за допомогою (useDispatch).
7. Надіслали об'єкт інструкції dispatch(action).
8. Прописали логіку опрацювання цієї інструкції в редьюсері.

store - це місце, де будуть зберігатися та опрауюватися дані (One source of truth).

dispatch - це функція, яка відправляє команду(action) в редьюсер.

action - це об'єкт, який має як мінімум містити поле type, може містити ще якусь 
  корисну інфомрацію в полі payload (об'єкт інстукції).

reducer - це чистя функція, яка приймає в себе state, action та повертає змінений, 
  або не змінений state.

*/



function MailboxPage() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.mailbox.users);
  const filter = useSelector(state => state.mailbox.filter)
  const [counter, setCounter] = useState(0);

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    const action = { type: "mailbox/ADD_USER", payload: finalUser };

    dispatch(action);
    // setUsers((prevUsers) => [...prevUsers, finalUser])
  };

  const onDeleteUser = (userId) => {
    const action = { type: "mailbox/DELETE_USER", payload: userId };

    dispatch(action);
    // setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const onChangeFilter = (event) => {
    const action = { type: "mailbox/SET_FILTER", payload: event.target.value };

    dispatch(action)
    // setFilter(event.target.value);
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
