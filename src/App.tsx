import './App.scss'
// import Home from '@/pages/Home/Home'
import Profile from '@/pages/Profile/Profile'
// import Entry from '@/pages/Entry/Entry'

function App () {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-10%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
        {/* <Home/> */}
         <Profile/>
      {/* <Entry/> */}
    </div>
  )
}

export default App
