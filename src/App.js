import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/navigation'
// Pages
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Work from './pages/Work'
import SingleProject from './pages/SingleProject'
// import Footer from './components/footer'

function App() {
  return (
    <div className='selection:bg-brandSecondary'>
      <Router>
        {/* <header> */}
        <Navigation />
        {/* </header> */}
        {/* <main className='h-[calc(100vh-85px)] flex flex-col justify-center items-center px-8 overflow-y-auto'> */}
        {/* <main className='min-h-screen container mx-auto flex flex-col flex flex-col items-center px-8 !overflow-y-auto'> */}
        <div className='overflow-y-auto overflow-x-hidden'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/project/:id' element={<SingleProject />} />
            <Route path='*' element={<NotFound />} />
            {/* This acts as a 404 page. */}
          </Routes>
        </div>
        {/* </main> */}
      </Router>
      {/* <Footer /> */}
    </div>
  )
}

export default App
