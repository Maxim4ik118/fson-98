import css from "./MailBoxListItem.module.css";

const MailBoxListItem = ({ user, onDeleteUser }) => {
  return (
    <li>
      <p>
        Email: <b>{user.userEmail}</b>
      </p>
      <p className={css.name}>
        Name:
        <span
          style={{
            backgroundColor: user.favColor,
          }}
          className={css.color}
        />
        <b>{user.userName}</b>
      </p>
      <button type="button" onClick={() => onDeleteUser(user.id)}>
        ❌
      </button>
    </li>
  );
};

export default MailBoxListItem;
