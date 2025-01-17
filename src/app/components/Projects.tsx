import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface Projects{
    id: number
    title: string
    description: string
    image: string
}

const projects: Projects[]=[
    {
        id:1,
        title: 'MUNICIPAL PROJECT',
        description: 'CHANGING ISLAND SEWAGE PURIFICATION',
        image: '/Image1.jpg',
    },
    {
        id:2,
        title: 'MUNICIPAL PROJECT',
        description: 'WUXING DEVELOPMENT WEST DISTRICT',
        image: '/Image2.jpg',
    },
    {
        id:3,
        title: 'MUNICIPAL PROJECT',
        description: 'POYANG LAKE BASIN SEWAGE TREATMENT PLANT',
        image: '/Image1.jpg',
    },
    {
        id:4,
        title: 'MUNICIPAL PROJECT',
        description: 'DALIAN EXCHANGE ISLAND WATER PURIFICATION PLANT',
        image: '/Image2.jpg',
    },
]

const Projects = () => {
  return (
    <Container maxWidth="lg">
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
        PROJECTS
      </Typography>

      <Grid container spacing={2} mb={2} 
      
      >
        {projects.map((project) => (
            <Grid item xs={12} md= {6} 
            
            >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #ccc",
                p: 3,
                
                    backgroundImage: `url(/background.jpg)`,
                  
              
            }}>
                <Box sx={{
                   pr: 3,
                }}>
                    <Typography color="#0288d1" fontWeight="bold" sx={{
                        fontSize: '0.9rem'
                    }}>
                        {project.title}
                    </Typography>
                    <Typography  sx={{
                        color: "#3d3a30",
                        mt: 1
                    }}>
                          {project.description}  
                        </Typography>
                    <Button variant="outlined" color="primary"sx={{
                        mt: 4,
                    }}>
                        View Details
                    </Button>
                </Box>
                <Box sx={{
                    ":hover": {
                        transform: "scale(1.1)",
                        transition: "all 0.3s ease-in-out",
                    }
                }}>
                    <Image
                    src={project.image}
                    alt="Project 1"
                    width={300}
                    height={200}
                    style={{
                        borderRadius: ''
                    }}
                    
                    />
                </Box>
            </Box>

        </Grid>
        ))}
        </Grid>
    </Container>
  )
}

export default Projects
