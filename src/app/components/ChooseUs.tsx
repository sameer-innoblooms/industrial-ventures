'use client'

import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { useState } from 'react'

const features = [
  { label: 'Money Back Guarantee', value: 90 },
  { label: 'Trusted Company', value: 94 },
]

const benefits = [
  'Many Brands',
  'Best Quality Product',
  'Commitment to Customers',
]

export default function ChooseUs() {
    const [loading, setLoading] = useState(true);
  const [itConsultingValue, setItConsultingValue] = useState(0);
  const [cyberSecurityValue, setCyberSecurityValue] = useState(0);

    const ProgressWithLabel = ({ label, value }: { label: string; value: number }) => (
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {label}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500, color: 'gray' }}>
              {Math.round(value)}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{
              height: 8,
              borderRadius: 5,
              backgroundColor: 'rgb(167, 202, 237)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(to right, #2E4A58, #1E7C94)',
              },
            }}
          />
        </Box>
      );
      



  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                minHeight: 400,
                backgroundImage: `url(/Store.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1"  gutterBottom sx={{
                color: "#1C4B84"
            }}>
              Why Choose Us
            </Typography>
            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
              We Are Best Electrical and Mechanical Store in Town
            </Typography>
            <Typography color="text.secondary" paragraph>
              We provide the best quality products at the best price. We have a wide range of products from many brands. We are committed to providing the best service to our customers.
            </Typography>

            <Box sx={{bgcolor: "#1C4B84" , p: 3, borderRadius: 2, color: 'white', mb: 4 }}>
              <VerifiedUserIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                We Provide The Best Guarantee For You Loyal Customers
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              {features.map((feature) => (
                <Box key={feature.label} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>{feature.label}</Typography>
                    <Typography>{feature.value}%</Typography>
                  </Box>
                  
                  <LinearProgress
                    variant="determinate"
                    value={feature.value}
                     
                    
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      color: "#1C4B84"
                    }}
                  />
                </Box>
              ))}
            </Box>

            <List>
              {benefits.map((benefit) => (
                <ListItem key={benefit} disableGutters>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{
                        color: "#1C4B84",
                    }} />
                  </ListItemIcon>
                  <ListItemText primary={benefit} />
                </ListItem>
              ))}
            </List>

            <Button
              variant="contained"
              size="large"
              sx={{ mt: 4 , bgcolor: "#1C4B84"}}
            >
              SHOP NOW
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}