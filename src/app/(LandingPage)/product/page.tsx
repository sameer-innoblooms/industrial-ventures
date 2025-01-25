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
import { products } from "./Data";
import { Pagination } from "@mui/material";
import Footer from "@/app/Footer";
import Promotions from "@/app/components/Promotion";

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

  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md"  sx={{ pt: 4 }}>
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
                    borderBottom: 4,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderColor:
                      activeCategory === "electrical"
                        ? "primary.main"
                        : "#cfcfcf",
                // pb: 1,
                fontSize: "25px",
                fontWeight: "bold",
                textTransform: "capitalize",
                mb: 2,
              }}
            >
              Electrical Products
            </Button>
            <Button
              onClick={() => handleCategoryChange("mechanical")}
              sx={{
                Color:
                  activeCategory === "mechanical"
                    ? "primary.main"
                    : "text.primary",
                borderBottom: 4,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderColor:
                  activeCategory === "mechanical"
                    ? "primary.main"
                    : "#cfcfcf",

                // pb: 1,
                ml: 2,
                fontSize: "25px",
                fontWeight: "bold",
                textTransform: "capitalize",
                mb: 2,
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
          {currentItems.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {/* {product.sale && (
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
                )} */}
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
                      // mb: 2,
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
        <Box
          sx={{
            display: "flex",

            justifyContent: "center",
            mt: 4,
          }}
        >
          <Pagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Container>
      <Promotions/>
    </ThemeProvider>
  );
}
