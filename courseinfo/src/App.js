import React from 'react'


const Header = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        <Part partName={props.parts[0].name} exercises={props.parts[0].exercises}/>
      </p>
      <p>
        <Part partName={props.parts[1].name} exercises={props.parts[1].exercises}/>
      </p>
      <p>
        <Part partName={props.parts[2].name} exercises={props.parts[2].exercises}/>
      </p>
    </>
  )
}

const Total = ({totalNumber}) => {
  return (
    <>
      <p>
        Number of exercises {totalNumber}
      </p>
    </>
  )
}

const Part = ({partName,exercises}) => {
  return (
    <>
    {partName} {exercises}
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log(parts)
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App