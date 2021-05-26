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
        <Part partName={props.part1.name} exercices={props.part1.exercices}/>
      </p>
      <p>
        <Part partName={props.part2.name} exercices={props.part2.exercices}/>
      </p>
      <p>
        <Part partName={props.part3.name} exercices={props.part3.exercices}/>
      </p>
    </>
  )
}

const Total = ({totalNumber}) => {
  return (
    <>
      <p>
        Number of exercices {totalNumber}
      </p>
    </>
  )
}

const Part = ({partName,exercices}) => {
  return (
    <>
    {partName} {exercices}
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total totalNumber={part1.exercices+part2.exercices+part3.exercices}/>
    </div>
  )
}

export default App