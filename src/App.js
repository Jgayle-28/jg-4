import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/navigation'
// Pages
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Work from './pages/Work'

function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <Navigation />
        </header>
        <main className='min-h-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />{' '}
            {/* This acts as a 404 page. */}
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App