'use client'

import Image from 'next/image'
import { Grid, Card, CardContent, Typography, IconButton, Box, Pagination, Stack } from '@mui/material'
import { Add } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '& .MuiCardMedia-root': {
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover .MuiCardMedia-root': {
    transform: 'scale(1.05)',
  },
}))

const ImageWrapper = styled(Box)({
  position: 'relative',
  height: 200,
  overflow: 'hidden',
  '& img': {
    objectFit: 'contain',
  },
})

const AddButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  bottom: 8,
  backgroundColor: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}))

const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(4, 0),
  '& .MuiPaginationItem-root': {
    color: theme.palette.primary.main,
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
}))

const pumps = [
  {
    id: 1,
    title: 'VCMX80-65 vertical sewage...',
image: '/pump1.png'  },
  {
    id: 2,
    title: 'Water Impeller Pump',
image: '/pump1.png'  },
  {
    id: 3,
    title: 'WQ Submersible Sewage Pump',
image: '/pump1.png'  },
  {
    id: 4,
    title: 'Submersible GrindPump',
image: '/pump1.png'  },
  {
    id: 5,
    title: 'Single stage Hydraulic Sewage...',
image: '/pump1.png'  },
  {
    id: 6,
    title: 'Stainless Steel Sewage Pump',
image: '/pump1.png'  },
  {
    id: 7,
    title: 'Submersible Grinder Impeller',
image: '/pump1.png'  },
  {
    id: 8,
    title: 'XBD Fire Fighting Pump',
image: '/pump1.png'  },
  {
    id: 9,
    title: 'ISG Vertical Sewage Pump',
image: '/pump1.png'  },
]

const ITEMS_PER_PAGE = 6

export default function IndustrialPumps() {
  const [page, setPage] = useState(1)
  
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const totalPages = Math.ceil(pumps.length / ITEMS_PER_PAGE)
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const currentPumps = pumps.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <Box sx={{ p: 4, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Industrial Pumps
      </Typography>
      <Grid container spacing={3}>
        {currentPumps.map((pump) => (
          <Grid item xs={12} sm={6} md={4} key={pump.id}>
            <StyledCard>
              <ImageWrapper>
                <Image
                  src={pump.image || "/placeholder.svg"}
                  alt={pump.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <AddButton size="small">
                  <Add />
                </AddButton>
              </ImageWrapper>
              <CardContent>
                <Typography variant="subtitle1" noWrap>
                  {pump.title}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      
      <PaginationContainer>
        <Stack spacing={2}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton 
            showLastButton
          />
        </Stack>
      </PaginationContainer>
    </Box>
  )
}

