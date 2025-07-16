import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage, LoginPage } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
