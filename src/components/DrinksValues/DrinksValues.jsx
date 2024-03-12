// drinks -> { beer: 3, whiskey: 2, wine: 1 }

const DrinksValues = ({ drinks, total }) => {
  return (
    <ul>
      <li>Beer: {drinks.beer}</li>
      <li>Whiskey: {drinks.whiskey}</li>
      <li>Wine: {drinks.wine}</li>
      <li>
        Total: <b>{total}</b>
      </li>
    </ul>
  );
};

export default DrinksValues;
