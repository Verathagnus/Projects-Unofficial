import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <nav className="container relative mx-auto p-6">
      {/* <!-- Flex container for nav items --> */}

      <div className="flex items-center justify-between space-x-20 my-6">
        {/* <!-- logo --> */}
        <div className="z-30">
          <img src="src/assets/logo-bookmark.svg" alt="" id="logo" />
        </div>
        {/* <!-- Menu Items --> */}
        <div
          className=" items-center space-x-10 uppercase text-grayishBlue md:flex"
        >
          <a href="" className="tracking-widest hover:text-softRed">Features</a>
          <a href="" className="tracking-widest hover:text-softRed">Download</a>
          <a href="" className="tracking-widest hover:text-softRed">FAQ</a>
          <a href="" className="px-8 py-2 text-white bg-softRed border-2 border-softRed
          rounded-lg shadow-md hover:text-softRed hover:bg-white
          ">
        Login
        </a>
          
        </div>
      </div>
    </nav>
 
  )
}

export default App
