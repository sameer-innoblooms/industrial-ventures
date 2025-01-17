'use client'
import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, CardMedia, Typography, Box, Container } from '@mui/material';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Product 1",
    description: "This is a description for product 1",
    image: "/pump1.png?height=200&width=300"
  },
  {
    id: 2,
    title: "Product 2",
    description: "This is a description for product 2",
    image: "/pump2.png?height=200&width=300"
  },
  {
    id: 3,
    title: "Product 3",
    description: "This is a description for product 3",
    image: "/pump3.png?height=200&width=300"
  },
  {
    id: 4,
    title: "Product 4",
    description: "This is a description for product 4",
    image: "/pump4.png?height=200&width=300"
  },
  {
    id: 5,
    title: "Product 5",
    description: "This is a description for product 1",
    image: "/pump1.png?height=200&width=300"
  },
  {
    id: 6,
    title: "Product 6",
    description: "This is a description for product 2",
    image: "/pump2.png?height=200&width=300"
  },
  {
    id: 7,
    title: "Product 7",
    description: "This is a description for product 3",
    image: "/pump3.png?height=200&width=300"
  },
  {
    id: 8,
    title: "Product 8",
    description: "This is a description for product 4",
    image: "/pump4.png?height=200&width=300"
  },
];

const ProductSlider: React.FC = () => {
  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container maxWidth="lg" sx={{
        py: 8
    }}>
        <Typography
        variant="h2"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 6,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 100,
            height: 4,
            backgroundColor: "#0288d1",
          },
        }}
      >
        HOT PRODUCTS
      </Typography>
      <Box sx={{ overflow: 'hidden', pb: 5}}>
      <Slider {...settings}>
        {products.map((product) => (
          <Box key={product.id} sx={{ pb: 5  }}>
            <Card sx={{
                mx: 2,
                
            }}>
              <CardMedia
                component="img"
                height="250px"
                width="240px"
                image={product.image}
                
                alt={product.title}
                sx={{
                    objectFit: 'fill',
                   
                    
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
    </Container>
    
  );
};

export default ProductSlider;

