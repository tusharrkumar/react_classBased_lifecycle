import { useState } from 'react'
// import ClassLifeCycle from './components/ClassLifeCycle'
import LifecycleA from './components/LifecycleA'

function App() {
  // const [flag,setFlag] = useState(true)
  return (
    <>
      {/* {flag && <ClassLifeCycle favSport="Cricket"></ClassLifeCycle>}
      <button onClick={() => setFlag(false)}> Remove the component</button> */}

      <LifecycleA/>
    </>
  )
}

export default App

