import React from 'react'
import { Routes, Route} from 'react-router-dom'
import PublicApp from './components/PublicApp'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
function App() {
  
  const location = useLocation();

  const PublicPage = location.pathname.startsWith('/public' && '/');
  return (
    <>
   
      <main className={PublicPage? 'lg:block flex  flex-col-reverse justify-center items-center':''}>
      {PublicPage &&<Navbar/>}
          <Routes>
            <Route path='/'element={ <PublicApp/>}/>
            <Route path= '/publicLanding' element={<LandingPage/>}/>
            <Route path= '/navbar' element={<Navbar/>}/>
          </Routes>
      </main>
    </>
  )
}

export default App
