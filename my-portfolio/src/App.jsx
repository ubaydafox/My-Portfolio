import { useEffect, useState } from 'react'
import './App.css'
import Portfolio from './Portfolio.jsx'
import Admin from './Admin.jsx'

const isAdminHash = () => window.location.hash.startsWith('#/admin')

function App() {
  const [admin, setAdmin] = useState(isAdminHash)

  useEffect(() => {
    const onHash = () => setAdmin(isAdminHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return admin ? <Admin /> : <Portfolio />
}

export default App
