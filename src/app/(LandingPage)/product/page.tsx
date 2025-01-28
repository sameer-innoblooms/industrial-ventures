
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
import AnimationUp from "@/app/components/AnimationUp";

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
      <AnimationUp>
      <Container maxWidth="md"  sx={{ pt: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", md: 'row'},
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            borderBottom: 1,
            borderColor: "divider",
            // border: '1px solid red'
          }}
        >
          <Box sx={{
            overflowX: 'hidden',
            // border: '1px solid green',
            width: {md: 500, xs: "105%"},
            alignContent: 'center',
            
          }}>
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
                fontSize: {xs: "15px", md: "20px"},
                fontWeight: "bold",
                textTransform: "capitalize",
                mb: 2,
                ml:{xs:1.3, md: 0},
                width: {xs: "46%", md: "48%"},
                // border: '1px solid red'
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
                ml: {xs:2},
                fontSize: {xs: "15px", md: "20px"},
                fontWeight: "bold",
                textTransform: "capitalize",
                mb: 2,
                width: {xs: "45%",md: "48%" },
                // border: '1px solid green'
              }}
            >
              Mechanical Products
            </Button>
          </Box>
          <Box sx={{
          
            // border: '1px solid blue',
            width: {xs: "100%", sm: 180, md:180},
            // border: '1px solid red',
            
          }}>
          <Select
            value={selectedType}
            onChange={handleTypeChange}
            sx={{ minWidth: {xs: "100%", sm: 180, md:180}, mb: 1,  }}
          >
            {availableTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </MenuItem>
            ))}
          </Select>
          </Box>
          
        </Box>
        <Grid container spacing={3}>
          {currentItems.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  boxShadow: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  border: '0.5px solid gray' 
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
      </AnimationUp>

      <Promotions/>
    </ThemeProvider>
  );
}
