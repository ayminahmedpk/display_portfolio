

import React from 'react';

import {
    //  BrowserRouter as Router ,
     HashRouter as Router    ,
     Routes                  ,
     Route                   ,
 } from 'react-router-dom';

import HomePage     from '../Pages/HomePage/HomePage.js'         ;
import AboutPage    from '../Pages/AboutPage/AboutPage.js'       ;
import ProjectsPage from '../Pages/ProjectsPage/ProjectsPage.js' ;
import ContactPage  from '../Pages/ContactPage/ContactPage.js'   ;

// import Footer  from '../Components/Footer/Footer.js' ;
import Header  from '../Components/Header/Header.js' ;


import './style.scss';
// import '../Pages/Pages.scss';


const App = () => {


  return (
    <>

      <Router>

        <Header/>

          <Routes>
            <Route element={<HomePage/>    } path={"/"         }> </Route>
            <Route element={<AboutPage/>   } path={"/about"    }> </Route>
            <Route element={<ProjectsPage/>} path={"/projects" }> </Route>
            <Route element={<ContactPage/> } path={"/contact"  }> </Route>
          </Routes>

        {/* <Footer/> */}

      </Router>

    </>
  )
}


export default App;