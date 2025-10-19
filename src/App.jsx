import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PricingOption from './Components/PricingOptions/PricingOption'

function App() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <main className='w-11/12 mx-auto'>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span> }>
        <PricingOption></PricingOption>
      </Suspense>
    </main>
      
    </>
  )
}

export default App
