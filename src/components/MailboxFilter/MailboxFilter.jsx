import { useDispatch, useSelector } from "react-redux";

import { selectFilter } from "../../redux/mailbox/selectors";
import { setFilter } from "../../redux/mailbox/mailboxReducer";

const MailboxFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = (event) => {
    const action = setFilter(event.target.value)
    dispatch(action);
  };

  return (
    <div>
      <h2>Search users by email or username</h2>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default MailboxFilter;
