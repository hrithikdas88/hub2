import Login from './components/Login/Login'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Prolist from './components/Prolist/Prolist'
function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <MemoryRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/prolist" element={<Prolist />} />
      </Routes>
    </MemoryRouter>
  )
}

export default App
