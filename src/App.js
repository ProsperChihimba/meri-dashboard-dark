import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import SideBar from './components/sideBar'
import Main from './components/main'
import './App.css'
import Login from './components/login'

const App = () => {
  return (
    <ChakraProvider>
      {/* <div className='App'>
        <SideBar />
        <Main />
      </div> */}
      <Login />
    </ChakraProvider>
    
  )
}

export default App