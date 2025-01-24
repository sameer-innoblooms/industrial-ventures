// 'use client'

// import { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Tabs,
//   Tab,
//   Grid,
//   Select,
//   MenuItem,
//   FormControl,
//   SelectChangeEvent,
// } from '@mui/material';
// import { categories, projects } from '@/app/components/Project';
// import ProjectCard from '@/app/components/ProjectCard';

// export default function ProjectsPage() {
//   const [projectType, setProjectType] = useState<'ongoing' | 'completed'>('ongoing');
//   const [category, setCategory] = useState('All');

//   const handleTabChange = (_: React.SyntheticEvent, newValue: 'ongoing' | 'completed') => {
//     setProjectType(newValue);
//   };

//   const handleCategoryChange = (event: SelectChangeEvent) => {
//     setCategory(event.target.value);
//   };

//   const filteredProjects = projects.filter(project => {
//     if (project.type !== projectType) return false;
//     if (category === 'All') return true;
//     return project.category === category;
//   });

//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Typography
//               component="h1"
//               variant="h2"
//               color="text.primary"
//               gutterBottom
//               fontWeight="bold"
//             >
//              Products
//             </Typography>

//       <Typography variant="body1" sx={{ mb: 6 }}>
//         We provide a vast variety of mechanical and electrical goods
//       </Typography>

//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
//         <Tabs
//           value={projectType}
//           onChange={handleTabChange}
//           sx={{
//             '& .MuiTab-root': { fontSize: '1.1rem' },
//             '& .Mui-selected': { color: '#1C4B84' },
//             '& .MuiTabs-indicator': { backgroundColor: '#1C4B84', height: 3 }
//           }}
//         >
//           <Tab
//             label="Electrical Products"
//             value="ongoing"
//           />
//           <Tab
//             label="Mechanical Products"
//             value="completed"
//           />
//         </Tabs>

//         <FormControl sx={{ minWidth: 200 }}>
//           <Select
//             value={category}
//             onChange={handleCategoryChange}
//             displayEmpty
//           >
//             {categories.map((cat) => (
//               <MenuItem key={cat} value={cat}>
//                 {cat}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Box>

//       <Grid container spacing={3}>
//         {filteredProjects.map((project) => (
//           <Grid item key={project.id} xs={12} sm={6} md={4}>
//             <ProjectCard project={project} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

"use client";

import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  type SelectChangeEvent,
  Box,
  Chip,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AnimationUp from "@/app/components/AnimationUp";

interface Product {
  id: number;
  name: string;
  category: "electrical" | "mechanical";
  type:
    | "all"
    | "lighting"
    | "power"
    | "control"
    | "measurement"
    | "motors"
    | "pipes"
    | "belts"
    | "mounting"
    | "health"
    | "cable";
  image: string;
  sale?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Lightings",
    category: "electrical",
    type: "lighting",
    image: "/FloodLight.png",
    sale: 20,
  },
  {
    id: 2,
    name: "Ionizer",
    category: "electrical",
    type: "power",
    image: "/Ionizer.png",
    sale: 25,
  },
  {
    id: 3,
    name: "Motor",
    category: "mechanical",
    type: "motors",
    image: "/Motor.png",
  },
  {
    id: 4,
    name: "Boiler Mounting",
    category: "mechanical",
    type: "mounting",
    image: "BoilerMountings.png",
    sale: 20,
  },
  {
    id: 5,
    name: "Water Meter",
    category: "electrical",
    type: "measurement",
    image: "/WaterMeter.png",
    sale: 20,
  },
  {
    id: 6,
    name: "V Belts",
    category: "mechanical",
    type: "belts",
    image: "/Vbelt.png",
    sale: 20,
  },
  {
    id: 7,
    name: "Capacitors",
    category: "electrical",
    type: "power",
    image: "/Capacitors.png",
    sale: 40,
  },
  {
    id: 8,
    name: "Pvc, Upvc Pipes",
    category: "mechanical",
    type: "pipes",
    image: "/PvcPipes.png",
  },
  {
    id: 9,
    name: "Shycocan Virus killer",
    category: "electrical",
    type: "health",
    image: "/VirusKiller.png",
  },
  {
    id: 10,
    name: "Electrical Switch Gears and Control Gears",
    category: "electrical",
    type: "health",
    image: "/SwitchGears.png",
  },

  {
    id: 11,
    name: "Electrical Transformers",
    category: "electrical",
    type: "health",
    image: "/Transformer.png",
  },
  {
    id: 12,
    name: "Electrical Wires and Cables",
    category: "electrical",
    type: "health",
    image: "/ElectricalWire.png",
  },
  {
    id: 13,
    name: "Instrumentation Cable",
    category: "electrical",
    type: "health",
    image: "/IntrumentationCable.png",
  },
  {
    id: 14,
    name: "Rubber Cable",
    category: "electrical",
    type: "health",
    image: "/Cables.png",
  },
  {
    id: 15,
    name: "LT/HT Cables",
    category: "electrical",
    type: "cable",
    image: "/LtCable.png",
  },
  {
    id: 16,
    name: "Welding Rods & Equipments",
    category: "mechanical",
    type: "health",
    image: "/WeldingRods.png",
  },

  {
    id: 17,
    name: "MS, SS, GI Hide Pipes",
    category: "mechanical",
    type: "health",
    image: "/MsPipes.png",
  },

  {
    id: 18,
    name: "Pulp Valve",
    category: "mechanical",
    type: "health",
    image: "/BoilerMountings.png",
  },
  {
    id: 19,
    name: "Sluice Valve",
    category: "mechanical",
    type: "health",
    image: "/SluiceValve.png",
  },
  {
    id: 20,
    name: "IBR & Non IBR Valve and Boiler Mounting",
    category: "mechanical",
    type: "health",
    image: "/IbrValve.png",
  },
  {
    id: 21,
    name: "Pump & Mono Blocks",
    category: "mechanical",
    type: "health",
    image: "/MonoBlocks.png",
  },
  {
    id: 22,
    name: "Rotary Gear",
    category: "mechanical",
    type: "health",
    image: "/RotatoryGear.png",
  },
  {
    id: 23,
    name: "CI Water Meter",
    category: "mechanical",
    type: "health",
    image: "/WaterMeter.png",
  },
  {
    id: 24,
    name: "Pneumatic & Hydraulic Goods",
    category: "mechanical",
    type: "health",
    image: "/HydrolicGoods.png",
  },
  {
    id: 25,
    name: "Flexible Hydraulic Hose",
    category: "mechanical",
    type: "pipes",
    image: ""
  },
  {
    id: 26,
    name: "Dryer Steam Range",
    category: "mechanical",
    type: "health",
    image: ""
  },
  {
    id: 27,
    name: "Steam Rotary Joints",
    category: "mechanical",
    type: "control",
    image: ""
  },
  {
    id: 28,
    name: "SS, MS, PVC, & GI Flanges",
    category: "mechanical",
    type: "mounting",
    image: ""
  },
  {
    id: 29,
    name: "GI, PVC, MS, & SS Fitting Elbow, Tee, Socket, Reducer",
    category: "mechanical",
    type: "pipes",
    image: ""
  },
  {
    id: 30,
    name: "SS, MS, PVC & GI Bends",
    category: "mechanical",
    type: "pipes",
    image: ""
  },
  {
    id: 31,
    name: "SS202, 304, 304L Sheet Bar, Flat, Rod",
    category: "mechanical",
    type: "mounting",
    image: ""
  },
  {
    id: 32,
    name: "HDPE Pipes and Fittings",
    category: "mechanical",
    type: "pipes",
    image: ""
  },
  {
    id: 33,
    name: "Impellers & Sleeve CI & SS",
    category: "mechanical",
    type: "motors",
    image: ""
  },
  {
    id: 34,
    name: "Perforated Sheets Jaali (MS & SS)",
    category: "mechanical",
    type: "mounting",
    image: ""
  },
  {
    id: 35,
    name: "Pulley",
    category: "mechanical",
    type: "belts",
    image: ""
  },
  {
    id: 36,
    name: "Spare for Centicleaner",
    category: "mechanical",
    type: "health",
    image: ""
  },
  {
    id: 37,
    name: "Doctor Blades",
    category: "mechanical",
    type: "control",
    image: ""
  },
  {
    id: 38,
    name: "Spare for Rewinders",
    category: "mechanical",
    type: "control",
    image: ""
  },
  {
    id: 39,
    name: "Bearing Housing",
    category: "mechanical",
    type: "mounting",
    image: ""
  },
  {
    id: 40,
    name: "Spare for Showers",
    category: "mechanical",
    type: "health",
    image: ""
  },
  {
    id: 41,
    name: "Flexible Pipes",
    category: "mechanical",
    type: "pipes",
    image: ""
  },
  {
    id: 42,
    name: "Tyre Star Gear",
    category: "mechanical",
    type: "motors",
    image: ""
  },
  {
    id: 43,
    name: "Couplings",
    category: "mechanical",
    type: "control",
    image: ""
  },
  {
    id: 44,
    name: "Bearing",
    category: "mechanical",
    type: "mounting",
    image: ""
  },
  {
    id: 45,
    name: "V Belts",
    category: "mechanical",
    type: "belts",
    image: ""
  },
  {
    id: 46,
    name: "Bearing Sleeves, Locknuts & Lock Washer",
    category: "mechanical",
    type: "mounting",
    image: ""
  },
  {
    id: 47,
    name: "PPR Fittings",
    category: "mechanical",
    type: "pipes",
    image: ""
  },
  {
    id: 48,
    name: "Wire Rope",
    category: "mechanical",
    type: "cable",
    image: ""
  },
  {
    id: 49,
    name: "Air Bellows",
    category: "mechanical",
    type: "control",
    image: ""
  },
  {
    id: 50,
    name: "Turbo Ventilators",
    category: "mechanical",
    type: "health",
    image: ""
  },
  {
    id: 51,
    name: "Conduit Pipes and Fittings",
    category: "electrical",
    type: "pipes",
    image: ""
  },
  {
    id: 52,
    name: "PVC, UPVC, CPVC Pipe and Fittings",
    category: "mechanical",
    type: "pipes",
    image: ""
  },
  {
    id: 53,
    name: "Dosing Pump",
    category: "mechanical",
    type: "control",
    image: ""
  }
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#2d2022",
    },
  },
});

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "electrical" | "mechanical"
  >("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" ? true : product.category === activeCategory;
    const matchesType =
      selectedType === "all" ? true : product.type === selectedType;
    return matchesCategory && matchesType;
  });

  const availableTypes = [
    "all",
    ...new Set(
      products
        .filter((product) =>
          activeCategory === "all" ? true : product.category === activeCategory
        )
        .map((product) => product.type)
    ),
  ];

  const handleCategoryChange = (
    category: "all" | "electrical" | "mechanical"
  ) => {
    setActiveCategory(category);
    setSelectedType("all");
  };

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setSelectedType(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <AnimationUp>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Box>
            <Button
              onClick={() => handleCategoryChange("electrical")}
              sx={{
                color:
                  activeCategory === "electrical"
                    ? "primary.main"
                    : "text.primary",
                borderBottom: activeCategory === "electrical" ? 2 : 0,
                borderColor: "primary.main",
                borderRadius: 0,
                pb: 1,
                fontSize: '25px',
                fontWeight: 'bold',
                textTransform: 'capitalize'
              }}
            >
              Electrical Products
            </Button>
            <Button
              onClick={() => handleCategoryChange("mechanical")}
              sx={{
                color:
                  activeCategory === "mechanical"
                    ? "primary.main"
                    : "text.primary",
                borderBottom: activeCategory === "mechanical" ? 2 : 0,
                borderColor: "primary.main",
                borderRadius: 0,
                pb: 1,
                ml: 2,
                 fontSize: '25px',
                fontWeight: 'bold',
                textTransform: 'capitalize'
              }}
            >
              Mechanical Products
            </Button>
          </Box>
          <Select
            value={selectedType}
            onChange={handleTypeChange}
            sx={{ minWidth: 180, mb: 1 }}
          >
            {availableTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {product.sale && (
                  <Chip
                    label={`${product.sale}% SALE`}
                    color="primary"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      zIndex: 1,
                    }}
                  />
                )}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      paddingTop: "100%",
                      position: "relative",
                      mb: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                  <Typography variant="subtitle1" component="h3" align="center">
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </AnimationUp>

    </ThemeProvider>
  );
}
