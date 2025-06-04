import React from 'react'
import { Routes, Route} from 'react-router-dom'
import PublicApp from './components/PublicApp'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Certificates from './Page/Certifications'
import ProjectPage from './Page/ProjectsPage'
import { useLocation } from 'react-router-dom'
import ContactPage from './Page/Contact'
function App() {
  
  const location = useLocation();

  const PublicPage = location.pathname.startsWith('/public' && '/');
  return (
    <>
   
      <main className={PublicPage? '':''}>
      {PublicPage &&<Navbar/>}
          <Routes>
            <Route path='/'element={ <PublicApp/>}/>
            <Route path= '/publicLanding' element={<LandingPage/>}/>
            <Route path= '/navbar' element={<Navbar/>}/>
            <Route path='/publicprojectPage' element={<ProjectPage/>}/>
            <Route path='/publiccertificates' element={<Certificates/>}/>
            <Route path='/publiccontact' element={<ContactPage/>}/>
          </Routes>
      {PublicPage && <Footer/>}
      </main>
    </>
  )
}

export default App
