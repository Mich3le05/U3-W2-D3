import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import Selection from './components/Selection'
import FirstCarousel from './components/FirstCarousel'
import MyFooter from './components/MyFooter'
import SecondCarousel from './components/SecondCarousel'
import ThirdCarousel from './components/ThirdCarousel'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main>
        <Selection />
        <FirstCarousel />
        <SecondCarousel />
        <ThirdCarousel />
      </main>
      <footer>
        <MyFooter />
      </footer>
      {/* // profilo  */}
      <Profile />
    </div>
  )
}

export default App
