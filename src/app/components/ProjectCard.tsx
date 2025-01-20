import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card sx={{ position: 'relative', height: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent 
        sx={{ 
          position: 'absolute', 
          bottom: 0, 
          width: '100%', 
          bgcolor: 'rgba(0,0,0,0.7)',
          color: 'white'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2">
              {project.location}
            </Typography>
          </Box>
          <ArrowForward />
        </Box>
      </CardContent>
    </Card>
  );
}

