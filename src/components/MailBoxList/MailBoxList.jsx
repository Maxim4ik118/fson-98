import MailBoxListItem from "../MailBoxListItem/MailBoxListItem";
import css from "./MailBoxList.module.css";

const MailBoxList = ({ users }) => {
  return (
    <ul className={css.mailboxList}>
      {Array.isArray(users) &&
        users.map((user) => {
          return <MailBoxListItem key={user.id} user={user} />;
        })}
    </ul>
  );
};

export default MailBoxList;
