
import './App.css'
import Login from './components/login.jsx'
import Profile from './components/profile.jsx'


import UserContextProvider from './context/Usercontext.jsx'

function App() {
  

  return (

    <UserContextProvider>
     <h1>React with Chai.It is my 8th Project of react</h1>
  <Login/>
  <Profile/>
    </UserContextProvider>
  )
}

export default App
