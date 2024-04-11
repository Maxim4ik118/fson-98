import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { clearTimer, incrementTimer } from "../redux/timer/timerSlice";

const NotFound = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.countDownTimer.timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(incrementTimer());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const onClearTimer = () => {
    dispatch(clearTimer());
  };
  
  if (timer === 5) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Page you visited doesn&apos;t exist.</h1>
      <h2>You will be redirected to Home in {5 - timer} seconds</h2>
      <button onClick={onClearTimer} type="button">
        Clear timer
      </button>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
