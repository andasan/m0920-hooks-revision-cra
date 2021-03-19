import React, {useContext} from 'react'
import './App.css'

import { AuthContext } from './context/auth-context'
import Auth from './components/Auth/Auth'
import Ingredients from './components/Ingredients/Ingredients'
// import WeatherApp from './components/WeatherApp/WeatherApp'
// import WeatherAppHooks from './components/WeatherApp/WeatherAppHooks'

const App = (props) => {
  const authContext = useContext(AuthContext)

  console.log('Context: ', authContext)
  let content = <Auth />
  
  if(authContext.isAuth){
    content = <Ingredients />
  }

  return content
  // return <Ingredients />
  // return <WeatherApp />
  // return <WeatherAppHooks />
}

export default App
