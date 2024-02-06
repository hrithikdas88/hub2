import Login from './components/Login/Login'
import { HashRouter, Route } from 'react-router-dom'
function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Login />
    </>
  )
}

export default App
