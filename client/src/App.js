import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer'
import Form from './components/form'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
