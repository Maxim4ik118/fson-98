// rafce -> snippet for react functional component

import MailBoxListItem from "../MailBoxListItem/MailBoxListItem";

import css from "./MailBox.module.css";

const MailBox = ({ users, onDeleteUser, boxTitle }) => {


  
  return (
    <div className={css.mailbox}>
      <h2 className={css.mailboxTitle}>{boxTitle}</h2>

      <ul className={css.mailboxList}>
        {Array.isArray(users) &&
          users.map((user) => {
            return (
              <MailBoxListItem
                key={user.id}
                onDeleteUser={onDeleteUser}
                user={user}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default MailBox;
