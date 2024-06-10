import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
