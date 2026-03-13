import { useState } from "react"

export default function RedBlueToggle() {
  
  const [IsBlue, SetItBlue] = useState(true);
  
  const handleBlue = () => {
    SetItBlue(true);
  }
  
  const handleRed = () => {
    SetItBlue(false);
  }

  return (
    <div>
      <h2 style={
        {
          color: IsBlue ? "blue" : "red"
        }
      }>মামা, কোডিং শিখছি, নিজের ভাগ্য নিজেই লিখছি!</h2>
      <button onClick={handleBlue}>Blue</button>
      <button onClick={handleRed}>Red</button>
    </div>
  )
}