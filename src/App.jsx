import React from 'react'
import './asset/css/style.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './router/AllRoutes.jsx'


function App() {
  return (
    <div>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App