import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import Selection from './components/Selection'
import FirstCarousel from './components/FirstCarousel'
import MyFooter from './components/MyFooter'
import SecondCarousel from './components/SecondCarousel'
import ThirdCarousel from './components/ThirdCarousel'
import Profile from './components/Profile'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <MyNav />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Selection />
                  <FirstCarousel />
                  <SecondCarousel />
                  <ThirdCarousel />
                </>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:movieID" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
