'use client'

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import { categories, projects } from '@/app/components/Project';
import ProjectCard from '@/app/components/ProjectCard';

export default function ProjectsPage() {
  const [projectType, setProjectType] = useState<'ongoing' | 'completed'>('ongoing');
  const [category, setCategory] = useState('All');

  const handleTabChange = (_: React.SyntheticEvent, newValue: 'ongoing' | 'completed') => {
    setProjectType(newValue);
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const filteredProjects = projects.filter(project => {
    if (project.type !== projectType) return false;
    if (category === 'All') return true;
    return project.category === category;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
              fontWeight="bold"
            >
             Products
            </Typography>
      
      <Typography variant="body1" sx={{ mb: 6 }}>
        We provide a vast variety of mechanical and electrical goods
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Tabs 
          value={projectType} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': { fontSize: '1.1rem' },
            '& .Mui-selected': { color: '#1C4B84' },
            '& .MuiTabs-indicator': { backgroundColor: '#1C4B84', height: 3 }
          }}
        >
          <Tab 
            label="Electrical Products" 
            value="ongoing"
          />
          <Tab 
            label="Mechanical Products" 
            value="completed"
          />
        </Tabs>

        <FormControl sx={{ minWidth: 200 }}>
          <Select
            value={category}
            onChange={handleCategoryChange}
            displayEmpty
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {filteredProjects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

