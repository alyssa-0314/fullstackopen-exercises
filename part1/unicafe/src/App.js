import { useState } from "react";

function Button ({handleGood,handleNeutral,handleBad}) {
  return(
    <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
    </div>
  )
}
function StatisticLine ({text,value}) {
  return  (
    <tr>
      <td>{text} {value}</td>
    </tr>
  )
}
function Statistics ({good,neutral,bad,total,average,percentage}) {
  if (good>0 || neutral>0 || bad>0){
    return (
      <div>
       <table>
       <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='total' value={total}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='percentage' value={percentage}/>
      </tbody>
      </table>
     </div>
    )} else {return(
      <div>
      <p>No feedback given</p>
      </div>
    )}
  
  
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] =useState(0)
  const [bad, setBad] =useState(0)
  function handleGood () {
       setGood(good+1)
  }
  function handleNeutral () {
    setNeutral(neutral+1)
  }
  function handleBad () {
    setBad(bad+1)
  }
  const total = good + neutral + bad
  const average = (good-bad)/3
  const percentage = (good/total)*100+'%'
  return (
     <div>
      <h1>give feedback</h1>
      <Button 
      handleGood={handleGood}
      handleNeutral={handleNeutral}
      handleBad={handleBad}
      />
      <h1>statistics</h1>
      <Statistics
        good = {good}
        neutral = {neutral}
        bad = {bad}
        total ={total}
        average ={average}
        percentage ={percentage}
      />
     </div>
  );
}

export default App;
