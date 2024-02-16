import { useState } from "react"
import Button from "./button"
import StatisticLine from "./status"

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
     <div>
        <StatisticLine status='good' count={good}/>
        <StatisticLine status='neutral' count={neutral} /> 
        <StatisticLine status='bad' count={bad} />
        <StatisticLine status='all' count={all} />
        <StatisticLine status='average' count={average / all}/>
        <StatisticLine status='positive' count={positive / all * 100 }/>
     </div> 
  );
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClickGood = () => {
      setGood(good + 1)
      setAll(all + 1)
      setAverage(average + 1)
      setPositive(positive + 1)
  }

  const handleClickNeutral = () => {
      setNeutral(neutral + 1)
      setAll(all + 1)
  }
  
  const handleClickBad = () => {
      setBad(bad + 1)
      setAll(all + 1)
      setAverage(average - 1)
  }

   return (
    <div>
      <h1>Give feedback</h1>
      <Button opinion={handleClickGood} text='good'/>
      <Button opinion={handleClickNeutral} text='neutral'/>
      <Button opinion={handleClickBad} text='bad'/>
      <h2>statistics</h2>
      { all >= 1 ?
      <Statistics 
        good={good} 
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
      : 'No feedback given'}
  </div>
  )
}

export default App