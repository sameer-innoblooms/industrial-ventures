"use client"
import { Box } from '@mui/material';
import React from 'react'
import Carousel from "react-material-ui-carousel";
import SliderCard from '../SliderCard';
const CarouselSlider = ({ SliderDetails }: any) => {
    return (
        <Carousel animation="slide" autoPlay={true} interval={3000} indicators={false} duration={1000}  >
            {SliderDetails.map((item: any, i: number) => (
                <Box key={i}>
                    <SliderCard item={item} />
                </Box>
            ))}
        </Carousel>
    )
}

export default CarouselSlider