import Header from './Header'
import Content from './Content'
import Total from './Total'

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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts[0].name} />
      <Content parts={course.parts[1].name} />
      <Content parts={course.parts[2].name} />
      <Total total={course.parts[0].exercises} />
      <Total total={course.parts[1].exercises} />
      <Total total={course.parts[2].exercises} />
    </div>
  )
}

export default App