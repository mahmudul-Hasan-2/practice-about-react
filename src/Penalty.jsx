import { useState } from "react"

export default function Penalty() {

  const [shot, setShots] = useState(0)
  const [goal, setGoals] = useState(0)
  const [miss, setMiss] = useState(0)

  const handleGoals = () => {
    if (shot < 5) {
      setShots(shot + 1);
      setGoals(goal + 1);
    }
  }

  const handleMiss = () => {
    if (shot < 5) {
      setShots(shot + 1);
      setGoals(goal);
      setMiss(miss + 1);
    }
  }

  return (
    <div>
        <p>{shot > 1 ? "Shots" : "Shot"}: {shot}</p>
        <p>Argentina: {goal}</p>
        <p>{miss > 1 ? "Misses" : "Miss"}: {miss}</p>
        <button onClick={handleGoals}>Goal</button>
        <button onClick={handleMiss}>Miss</button>
    </div>
  )
}