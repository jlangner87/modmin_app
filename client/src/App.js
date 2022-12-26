import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  )
}

export default App
