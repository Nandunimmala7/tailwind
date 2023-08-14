import React, { useState }  from 'react';
import HomeSectionCard from '../homesectioncard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button'; // Import Button from MUI

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const [activeIndex,setActiveIndex] = useState(0);
    const slidePrev = () => setActiveIndex(activeIndex-1);
    const slideNext = () => setActiveIndex(activeIndex+1);
    const syncActiveIndex = ({item}) => setActiveIndex(item)

    const items = [1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,].map((item) => <HomeSectionCard />);

    return (
        <div className='lg:px-8 border-black'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
               {activeIndex !== items.length-5 && <Button
                    variant='contained'
                    className='z-50 bg-white'
                    onClick={slideNext}
                    sx={{
                        position: 'absolute',
                        top: '8rem', // Center vertically
                        right: '-1rem', // Adjust as needed
                        transform: 'translateY(-50%) rotate(90deg)', bgcolor:"white"// Rotate and center vertically
                    }}
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)',color:"black" }} />
                </Button>}
                {activeIndex !== 0 && <Button
                    variant='contained'
                    className='z-50 bg-white'
                    onClick={slidePrev}
                    sx={{
                        position: 'absolute',
                        top: '8rem', // Center vertically
                        left: '0rem', // Adjust as needed
                        transform: 'translateY(-50%) rotate(90deg)', bgcolor:"white"// Rotate and center vertically
                    }}
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)',color:"black" }} />
                </Button>}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
