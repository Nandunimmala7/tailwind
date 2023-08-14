import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';

// Move MainCarouselData import to the top of the file
import { MainCarouselData } from '../HomeCarousel/MainCarouselData';

const MainCarousel = () => {
   // const navigate = useNavigate();

    const items = MainCarouselData.map((item) => (
        <img
            key={item.id}
            className='cursor-pointer'
           // onClick={() => navigate(item.image)} // Call the navigate function with the path
            role='presentation'
            src={item.image}
            alt="nnk"
        />
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
        />
    );
};

export default MainCarousel;
