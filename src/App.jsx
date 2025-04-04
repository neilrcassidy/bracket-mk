/* eslint-disable no-unused-vars */
import { useState } from 'react'

import { Form } from './components'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen absolute'>
        <Form />
      </div>
    </>
  )
}

export default App
