import { useEffect, useState } from "react";
import DrinksCounter from "./components/DrinksCounter/DrinksCounter";
import DrinksValues from "./components/DrinksValues/DrinksValues";

// import MailBox from "./components/MailBox/MailBox";

// import meestExpressUsers from "./meesExpress.json";
// import novaPoshtaUsers from "./novaPoshta.json";
// import ukrPoshtaUsers from "./ukrPoshta.json";

const initialDrinks = { beer: 0, whiskey: 0, wine: 0 };

function App() {
  const [drinks, setDrinks] = useState(() => {
    const stringifiedDrinks = localStorage.getItem("drinksValues");
    const parsedDrinks = JSON.parse(stringifiedDrinks) ?? initialDrinks;
    return parsedDrinks;
  });
  const [isVisibleBar, setIsVisibleBar] = useState(false);

  const handleLogDrink = (drinkName) => {
    // drinkName -> "beer" | "whiskey" | "wine"
    if (drinks[drinkName] === 2 && drinkName === "beer") {
      alert("Sorry, you excedded the beer limit. Please choose another drink!");
      return;
    }
    setDrinks({ ...drinks, [drinkName]: drinks[drinkName] + 1 });
  };

  const handleResetDrinks = () => {
    setDrinks(initialDrinks);
  };

  const onToggleMiniBarVisibility = () => {
    setIsVisibleBar(!isVisibleBar);
  };

  const drinksTotal = Object.values(drinks).reduce(
    (acc, curr) => acc + curr,
    0
  );

  useEffect(() => {
    localStorage.setItem("drinksValues", JSON.stringify(drinks));
  }, [drinks]);

  return (
    <div>
      <button onClick={onToggleMiniBarVisibility}>
        {isVisibleBar ? "Hide" : "Show"} mini-bar
      </button>
      {isVisibleBar && (
        <>
          <DrinksValues drinks={drinks} total={drinksTotal} />
          <DrinksCounter
            total={drinksTotal}
            handleResetDrinks={handleResetDrinks}
            onToggleMiniBarVisibility={onToggleMiniBarVisibility}
            handleLogDrink={handleLogDrink}
          />
        </>
      )}
    </div>
  );
}

export default App;
