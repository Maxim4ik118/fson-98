import MailBox from "./components/MailBox";

const meestExpressUsers = [
  { id: "1", userEmail: "user@example.com" },
  { id: "2", userEmail: "max@example.com" },
  { id: "3", userEmail: "merry@example.com" },
];
const novaPoshtaUsers = [
  { id: "22", userEmail: "ddfr@example.com" },
  { id: "33", userEmail: "qwerty@example.com" },
];
const ukrPoshtaUsers = [
  { id: "111", userEmail: "tyfany@example.com" },
  { id: "222", userEmail: "kirill_22@example.com" },
  { id: "333", userEmail: "linkoln@example.com" },
  { id: "3443", userEmail: "linkoln2222@example.com" },
];

function App() {
  return (
    <div>
      <MailBox
        boxUsers={meestExpressUsers}
        boxTitle="Meest Express"
        mailBoxCount={3}
      />
      <MailBox
        boxUsers={novaPoshtaUsers}
        boxTitle="Nova Poshta"
        mailBoxCount={5}
      />
      <MailBox boxUsers={ukrPoshtaUsers} boxTitle="UKR Poshta" />
    </div>
  );
}

export default App;
