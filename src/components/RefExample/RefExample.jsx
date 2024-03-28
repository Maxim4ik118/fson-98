import { useEffect, useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);
  const btnRef = useRef(null);

  const handleClick = () => {
    btnRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  useEffect(() => {
    if (inputRef.current === null) return;

    inputRef.current.focus();
  }, []);

  return (
    <div>
      <button className="my-fav-btn" ref={btnRef} onClick={handleClick}>
        Click to do smth
      </button>
      <input ref={inputRef} type="text" placeholder="Enter smth" />
    </div>
  );
};

export default RefExample;
