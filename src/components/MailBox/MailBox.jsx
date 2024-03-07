// rafce -> snippet for react functional component
import clsx from "clsx";
import css from "./MailBox.module.css";
import MailBoxList from "../MailBoxList/MailBoxList";

const MailBox = ({ users, boxTitle, mailBoxCount = 0 }) => {
  const isMailBoxIsFull = mailBoxCount === 0;

  return (
    <div
      className={clsx(css.mailbox, {
        [css.full]: isMailBoxIsFull,
      })}
    >
      <h2 className={css.mailboxTitle}>{boxTitle}</h2>
      {isMailBoxIsFull ? (
        <p>
          <b>
            Приносимо вибачення за незручності. Наразі немає доступних скриньок
            для замовлення.
          </b>
        </p>
      ) : (
        <p>Кількість активних поштових скриньок: {mailBoxCount}</p>
      )}

      <MailBoxList users={users} />
    </div>
  );
};

export default MailBox;
