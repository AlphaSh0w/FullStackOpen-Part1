import React, { useState } from 'react'

const Button = ({onClick,text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const FeedBackButtons = ({goodOnClick,neutralOnClick,badOnClick}) => {
  return(
    <>
      <p>Give feedback</p>
      <Button onClick={goodOnClick} text="good"/>
      <Button onClick={neutralOnClick} text="neutral"/>
      <Button onClick={badOnClick} text="bad"/>
    </>
  )
} 

const Statistics = ({good,neutral,bad}) => {
  const total = good+neutral+bad
  return(
    <p>
      good {good}<br></br>
      neutral {neutral}<br></br>
      bad {bad}<br></br>
      total {total}<br></br>
      average {(good-bad)/total}<br></br>
      positive {(good/total)*100}%
    </p>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <FeedBackButtons goodOnClick={() => setGood(good+1)}
       neutralOnClick={() => setNeutral(neutral+1)}
       badOnClick={() => setBad(bad+1)}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App