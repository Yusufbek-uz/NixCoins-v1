//components
import { Tap } from './assets/components/tap/Tap'
import { Head } from './assets/components/head/Head'
import { Bar } from './assets/components/bar/Bar'

import { useState } from 'react'
import './App.css'

//img

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      {/* <Head /> */}
      <Tap />
      <Bar />
    </div>
    </>
  )
}

export default App