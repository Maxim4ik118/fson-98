const MailBoxListItem = ({ user, onDeleteUser }) => {
  return (
    <li>
      <p>
        Email: <b>{user.userEmail}</b>
      </p>
      <p>
        Name: <b>{user.userName}</b>
      </p>
      <button type="button" onClick={() => onDeleteUser(user.id)}>
        ❌
      </button>
    </li>
  );
};

export default MailBoxListItem;
