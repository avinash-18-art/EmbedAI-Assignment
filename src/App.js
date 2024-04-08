import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import CreateCharacter from './components/CreateCharacter'
import Chat from './components/Chat'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/create-character" component={CreateCharacter} />
          <Route path="/chat" component={Chat} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
