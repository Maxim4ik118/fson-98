import { useEffect } from "react";

/*
Реакції на події життєвого циклу компоненти:

1. Реакція на монтування комопненти
    - Надсилання HTTP запитів одразу після рендеру компонети.
    - Зчитування даних з локалстореджу.
    - Встановити setTimout|setInterval.
    - Вішаються глобальні слухачі події window.addEventListener

2. Реакція на ДЕмонтування комопненти
    - Відхиляти HTTP запитів перед демонтуванням компоненти.
    - Очищувати setTimout|setInterval -> сlearTimeout|clearInterval.
    - Знімаються глобальні слухачі події window.removeEventListener 

3. Реакція на ОНОВЛЕННЯ компонети
    - Надсилання HTTP запитів одразу після ОНОВЛЕННЯ компонети.
    - Оновлюємо(синхронізуємо) дані з локалстореджу.
    - Виконуватися ефекти на реакцію оновлення.
*/

const DrinksCounter = ({
  handleResetDrinks,
  onToggleMiniBarVisibility,
  handleLogDrink,
  total,
}) => {

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onToggleMiniBarVisibility();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onToggleMiniBarVisibility]);

  return (
    <div>
      <button onClick={() => handleLogDrink("beer")}>🍺 Beer</button>
      <button onClick={() => handleLogDrink("whiskey")}>🥃 Whiskey</button>
      <button onClick={() => handleLogDrink("wine")}>🍷 Wine</button>
      {total !== 0 && <button onClick={handleResetDrinks}>Reset</button>}
    </div>
  );
};

export default DrinksCounter;
