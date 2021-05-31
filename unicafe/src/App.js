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

const Statistic = ({text, value, after}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value} {after}</td>
    </tr>
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
      <table>
        <tbody>
          <Statistic text="good" value={good}/>
          <Statistic text="neutral" value={neutral}/>
          <Statistic text="bad" value={bad}/>
          <Statistic text="total" value={total}/>
          <Statistic text="average" value={(good-bad)/total}/>
          <Statistic text="positive" value={(good/total)*100} after='%'/>
        </tbody>
      </table>
    )
  }
  return(
    <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="total" value={total}/>
      </tbody>
    </table>
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