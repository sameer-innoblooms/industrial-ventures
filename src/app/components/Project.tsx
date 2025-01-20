import { Project } from "./types";

export const projects: Project[] = [
  {
    id: '1',
    title: 'Motor',
    location: 'Electrical Motor',
    image: '/pump4.png',
    type: 'ongoing',
    category: 'Wastewater solution'
  },
  {
    id: '2',
    title: 'Cables',
    location: 'Rubber cables',
    image: 'Cables.png',
    type: 'completed',
    category: 'Water Supply & Distribution Management'
  },
  // Add other projects similarly
];

export const categories = [
  'All',
  'Sort by popularity',
  'Sort by average rating',
  'sort by latest',
  'Sort by price: low to high',
   'Sort by price: high to low'
] as const;

