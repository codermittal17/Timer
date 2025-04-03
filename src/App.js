import { useEffect, useState } from "react"
import Time from "./Time"
import Button from "./Button";

function App() {
  const [secondRemaining, setSecondsRemaining] = useState(10);
  const [appState, setAppState] = useState("reset");

  function startTimer() {
    setAppState((appState) => appState === "start" ? "stop" : "start");
  }

  function resetTimer() {
    setSecondsRemaining(10);
    setAppState("reset");
  }

  useEffect(function () {
    if (appState !== "start") return;

    const id = setInterval(() => {
      setSecondsRemaining((secondRemaining) => {
        if (secondRemaining <= 1) {
          clearInterval(id);
          setAppState("reset");
          return 0;
        }
        return secondRemaining - 1;
      });
    }, 1000);

    return function () {
      clearInterval(id);
    }
  }, [appState])

  return (
    <div className="timer-container">
      <Time secondRemaining={secondRemaining} />
      <div className="interaction-buttons">
        <Button onClick={startTimer}>Start/Stop</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  )
}

export default App
