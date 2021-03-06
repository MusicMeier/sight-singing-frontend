import './App.css';
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from  'react-redux'
import SightSinging from './components/SightSinging'
import SecondIntervals from './components/SecondIntervals'
import ThirdIntervals from './components/ThirdIntervals'
import FourthIntervals from './components/FourthIntervals'
import FifthIntervals from './components/FifthIntervals'
import SixthIntervals from './components/SixthIntervals'
import SeventhIntervals from './components/SeventhIntervals'
// import Header from './components/Header'
import Layout from './hoc/Layout'
import Login from './components/Login'
import SignUp from './components/SignUp'
import MainPage from './components/MainPage'

// import { Provider } from 'react-redux'
// import store from './'

const frequenciesUrl = 'http://localhost:8003/frequencies'

function App({isAuthenticated}) {

  const [ notes, setNotes ] = useState([])

  useEffect(() => {
    fetch(frequenciesUrl)
      .then(response => response.json())
      .then(result => setNotes(result))
  }, [])

  const filterNotes = (selectedInterval) => {
    return notes.filter(note => {
      return note.interval === selectedInterval
    })
  }

  return (
    <div className="App">
      <Layout />
      <Switch>
        <Route path="/signup" render={(routerProps) => {
          return <SignUp {...routerProps}/> 
        }} 
          />
        <Route path="/login" render={(routerProps) => {
          return <Login {...routerProps}/> 
        }} 
          />
        <Route path="/SightSinging" render={(routerProps) => {
          return isAuthenticated 
            ? <SightSinging notes={notes} {...routerProps}/> 
            : <Redirect to='/login' />
        }} 
          />
        {/* <Route path="/homepage" render={(routerProps) => {
          return <HomePage {...routerProps}/> 
        }} 
          /> */}
        <Route path="/mainpage" render={(routerProps) => {
          return <MainPage {...routerProps}/> 
        }} 
          />
        <Route path="/SecondIntervals" render={(routerProps) => {
          return <SecondIntervals intervalNotes={filterNotes('second')}  {...routerProps}/> 
        }} 
          />
        <Route path="/ThirdIntervals" render={(routerProps) => {
          return <ThirdIntervals intervalNotes={filterNotes('third')}  {...routerProps}/> 
        }} 
          />
        <Route path="/FourthIntervals" render={(routerProps) => {
          return <FourthIntervals intervalNotes={filterNotes('fourth')}  {...routerProps}/> 
        }} 
          />
        <Route path="/FifthIntervals" render={(routerProps) => {
          return <FifthIntervals intervalNotes={filterNotes('fifth')}  {...routerProps}/> 
        }} 
          />
        <Route path="/SixthIntervals" render={(routerProps) => {
          return <SixthIntervals intervalNotes={filterNotes('sixth')}  {...routerProps}/> 
        }} 
          />
        <Route path="/SeventhIntervals" render={(routerProps) => {
          return <SeventhIntervals intervalNotes={filterNotes('seventh')}  {...routerProps}/> 
        }} 
          />
        <Route exact path="/" render={(routerProps) => {
          return <HomePage {...routerProps}/> 
        }} 
          />
      </Switch>
    </div>
  );
}

const mapDispatchProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapDispatchProps)(App);
