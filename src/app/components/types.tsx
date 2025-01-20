export interface Project {
    id: string;
    title: string;
    location: string;
    image: string;
    type: 'ongoing' | 'completed';
    category: 'All' | 'Irrigation' | 'Wastewater solution' | 'Water Supply & Distribution Management';
  }
  
  