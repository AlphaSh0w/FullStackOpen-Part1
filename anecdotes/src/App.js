import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const PopularAnecdote = ({anecdotes, points}) => {
  var popularIndex = 0
  var highestVotes = 0
  for(var i = 0; i< 7; i++)
  {
    if(points[i] > highestVotes)
    {
      highestVotes = points[i]
      popularIndex = i
    }
  }
  return (
    <>
      <h1>Anecdote with most upvotes</h1>
      <p>{anecdotes[popularIndex]}</p>
      <p>has {points[popularIndex]} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  //States
  const [selected, setSelected] = useState(0)
  const [points , setPoints] = useState([0,0,0,0,0,0,0])
  //Functions
  const selectRandomAnecdote = () => {
    setSelected(Math.floor(Math.random()*7))
  }
  const vote = () => {
    const copy = {...points}
    copy[selected] += 1
    setPoints(copy)
  }
  //Display
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={vote} text="vote"/>
      <Button onClick={selectRandomAnecdote} text="next anecdote"/>
      <PopularAnecdote anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App