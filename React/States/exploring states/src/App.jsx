import React from 'react'
import './App.css'
import EggContianer from './componets/EggContianer'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'

function App() {
  return (
    <>
      <Provider store = {store}>
        <EggContianer />
      </Provider>
    </>
  )
}

export default App
