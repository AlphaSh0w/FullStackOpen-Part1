import React from 'react'


const Header = ({courseName}) => {
  return (
    <>
      <h1>{courseName}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        <Part partName={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      </p>
      <p>
        <Part partName={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      </p>
      <p>
        <Part partName={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
      </p>
    </>
  )
}

const Total = ({course}) => {
  return (
    <>
      <p>
        Number of exercises {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  console.log(course)
  return (
    <div>
      <Header courseName={course.name}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App