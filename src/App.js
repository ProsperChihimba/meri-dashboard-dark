import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import SideBar from './components/sideBar'
import Main from './components/main'
import './App.css'
import Login from './components/login'


const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    {
      path: "home",
      element:
        <div className='App'>
          <SideBar />
          <Main />
        </div>
    },
    // ...
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <ChakraProvider>
        <AppWrapper />
      </ChakraProvider>
    </Router>
    
  )
}

export default App