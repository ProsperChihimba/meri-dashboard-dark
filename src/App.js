import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import SideBar from './components/sideBar'
import Main from './components/main'
import './App.css'

const App = () => {
  return (
    <ChakraProvider>
      <div className='App'>
        <SideBar />
        <Main />
      </div>
    </ChakraProvider>
    
  )
}

export default App