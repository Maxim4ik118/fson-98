const MailBoxForm = ({ onAddUser }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const userEmail = event.currentTarget.elements.userEmail.value;
    const userName = event.currentTarget.elements.userName.value;
    
    const formData = {
        userEmail,
        userName
    }

    onAddUser(formData)

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new mailbox user</h2>
      <label>
        <span>User email:</span>
        <br />
        <input
          type="email"
          name="userEmail"
          placeholder="jorik@i.ua"
          required
        />
      </label>{" "}
      <br />
      <label>
        <span>User name:</span>
        <br />
        <input type="text" name="userName" placeholder="Jorik Jorik" required />
      </label>
      <br />
      <button type="submit">▶ Create new user</button>
    </form>
  );
};

export default MailBoxForm;
