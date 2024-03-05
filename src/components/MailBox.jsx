// rafce -> snippet for react functional component

const MailBox = ({ boxUsers, boxTitle, mailBoxCount = 0 }) => {
  return (
    <div>
      <h2>{boxTitle}</h2>
      {mailBoxCount === 0 ? (
        <p>
          <b>
            Приносимо вибачення за незручності. Наразі немає доступних скриньок
            для замовлення.
          </b>
        </p>
      ) : (
        <p>Кількість активних поштових скриньок: {mailBoxCount}</p>
      )}

      <ul>
        {Array.isArray(boxUsers) &&
          boxUsers.map((user) => {
            return <li key={user.id}>Email: {user.userEmail}</li>;
          })}
      </ul>
    </div>
  );
};

export default MailBox;
