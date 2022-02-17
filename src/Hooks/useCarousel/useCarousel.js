

import {useContext}      from 'react'         ;

import {CarouselContext} from '../../App/App.js' ;

import './useCarousel.scss';


const useCarousel = ({currentPage, setCurrentPage, numberOfPages}) => {
    
    // const {currentPage, setCurrentPage, numberOfPages} = useContext(CarouselContext);
    // Or, instead of context, it could take a prop argument and destrucure that
    // instead.


    const computeTargetPage = (target) => {
        const lastPage = numberOfPages;
        switch (target) {
            case "<" :
                return currentPage==1 ? lastPage : currentPage-1;
            case ">" :
                return currentPage==lastPage ? 1 : currentPage+1;
            default:
                return parseInt(target);
        }
    }
    
    
    const carouselLinkHandler = (e) => {
        const targetPage = computeTargetPage(e.target.getAttribute('data-carousel__link-target'));
        setCurrentPage(targetPage);
    }
    

    const getCarouselClasses = () => {
        return `carousel carousel--page-${currentPage}`;
    }


    const getCarouselLinkClasses = (target) => {
        const activeClass = (target==currentPage) ? 'carousel__link--active' : '';
        return activeClass;
    }


    return [getCarouselClasses, getCarouselLinkClasses, carouselLinkHandler];
};


export default useCarousel;