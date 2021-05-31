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

const Statistic = ({text, value}) => {
  return(
    <>
      {text} {value}
    </>
  )
}

const Statistics = ({good,neutral,bad}) => {
  const total = good+neutral+bad
  if(good === 0 & neutral === 0 & bad === 0)
  {
    return(<p>No feedback given</p>)
  }
  if(good > 0 & bad >0)
  {
    return(
      <p>
        <Statistic text="good" value={good}/><br></br>
        <Statistic text="neutral" value={neutral}/><br></br>
        <Statistic text="bad" value={bad}/><br></br>
        <Statistic text="total" value={total}/><br></br>
        <Statistic text="average" value={(good-bad)/total}/><br></br>
        <Statistic text="positive" value={(good/total)*100}/>%
      </p>
    )
  }
  return(
    <p>
      <Statistic text="good" value={good}/><br></br>
      <Statistic text="neutral" value={neutral}/><br></br>
      <Statistic text="bad" value={bad}/><br></br>
      <Statistic text="total" value={total}/><br></br>
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