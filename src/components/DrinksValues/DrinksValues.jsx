import imgReact from "../../assets/images/react.svg";

const DrinksValues = ({ drinks, total }) => {
  return (
    <ul>
      <li>React: <img src={imgReact} alt="" /></li>
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
