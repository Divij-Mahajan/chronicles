import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from './App.jsx'
import Footer from './components/Header-Footer/footer.jsx'
import Header from './components/Header-Footer/header.jsx'
import './index.css'
import LogIn from './components/Form/logIn.jsx'
import SignUp from './components/Form/signUp.jsx'
import View from './View.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} /> 
        <Route path="/View" element={<View />} /> 
      </Routes>
    </Router>
    <Footer/>
  </React.StrictMode>
)
