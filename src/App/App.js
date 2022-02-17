

import React, {useState} from 'react';

import Header  from '../Components/Header/Header.js'  ;
import Content from '../Components/Content/Content.js';
import Footer  from '../Components/Footer/Footer.js'  ;

import useCarousel from '../Hooks/useCarousel/useCarousel.js';

import './App.scss';


const App = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = 4;

  const [getCarouselClasses,
         getCarouselLinkClasses,
         carouselLinkHandler] = useCarousel({currentPage,
                                             setCurrentPage,
                                             numberOfPages});


  return (
    <>
      <Header
        carouselLinkHandler={carouselLinkHandler}
        getCarouselLinkClasses={getCarouselLinkClasses}
      />
      <Content getCarouselClasses={getCarouselClasses}/>
      <Footer/>
    </>
  )
}


export default App;