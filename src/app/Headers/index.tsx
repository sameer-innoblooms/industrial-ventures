
"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
// import ServicesDropdown from "../components/ServicePopover";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {

  const theme = createTheme({
    breakpoints: {
      values: {
        // xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 1024, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
  });

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [expanded] = useState<{ [key: string]: boolean }>({});

  // const handleToggle = (text: string) => {
  //   setExpanded((prevExpanded) => {
  //     const newExpanded = { ...prevExpanded };
  //     // Close all other drawers
  //     for (const key in newExpanded) {
  //       newExpanded[key] = false;
  //     }
  //     // Toggle the current drawer
  //     newExpanded[text] = !prevExpanded[text];
  //     return newExpanded;
  //   });
  // };

  // const drawerLink = [
  //   { text: "Home", href: "#home" },
  //   { text: "About", href: "#aboutus" },
  //   { text: "Products", href: "#home" },
  //   { text: "Career", href: "#home" },
  //   { text: "Blogs", href: "#Blogs" },
  // ];
  const drawerLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "#home" },
    { text: "Products", href: "/product" },
    { text: "Career", href: "#home" },
    { text: "Blogs", href: "#home" },
  ];

  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 100,
  // });

  const NavLinks = () => (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{
          // mx: { xs: 2, sm: 3, md: 16, lg: 20, xl: 20 },
        }}>
          {drawerLinks.map((link) =>
            <Link key={link.text} href={link.href}>

              <Typography
                variant="h6"
                color="white"
                component="div"
                sx={{


                  px: { sm: 2, md: 3.5 },
                  py: 3,
                  fontSize: { xs: "16px", sm: "18px" },
                  cursor: "pointer",
                  fontWeight: 500,
                  display: "inline-block",
                  position: "relative", // Required for the pseudo-element to work

                  // Set the color based on the current pathname
                  color:
                    pathname === link.href && pathname !== "/"
                      ? "#4294a5"
                      : "black",
                  transition: "color 0.2s ease",

                  // Bottom border logic for the specific path
                  borderBottom:
                    (pathname === link.href && pathname !== "/") ||
                      (link.href === "/services" &&
                        pathname.startsWith("/services"))
                      ? "3.5px solid #4294a5" // Border for the specific path
                      : "none",

                  // Disable hover effect for the active link
                  "&:hover":
                    pathname === link.href ||
                      (link.href === "/services" &&
                        pathname.startsWith("/services"))
                      ? {}
                      : {
                        color: "#4294a5",
                      },

                  // Use the ::after pseudo-element to create the borderBottom effect
                  "&::after": {
                    content: '""', // Create an empty pseudo-element
                    position: "absolute",
                    bottom: -1.5, // Position it at the bottom of the text
                    left: 0,
                    width: "100%",
                    height: "3px", // Thickness of the underline
                    backgroundColor: "#4294a5", // Color of the underline
                    transform: "scaleX(0)", // Initially hidden
                    transition: "transform 0.3s ease", // Smooth transition for the underline
                  },

                  // Reveal the underline on hover
                  "&:hover::after":
                    pathname === link.href ||
                      (link.href === "/services" &&
                        pathname.startsWith("/services"))
                      ? {}
                      : {
                        transform: "scaleX(1)",
                      },
                }}
              >
                {link.text}
              </Typography>
            </Link>
          )
          }
          <Link href="#">
            <Button
              variant="contained"
              sx={{
                width: { xs: "100px", sm: "130px", md: "150px" },
                height: { xs: "35px", sm: "45px", md: "50px" },
                minWidth: "100px",
                bgcolor: "#4294A5",
                color: "black",
                fontWeight: "medium",
                borderRadius: "50px",
                fontSize: { xs: "11px", sm: "13px", md: "15px" },
                ml: { xs: 1, sm: 2 },
                mr: { xs: 1, sm: 1, md: 10, lg: 18, xl: 10 },
                "&:hover": {
                  color: "black",
                  backgroundColor: "white",
                },
              }}
            >
              Contact us
            </Button>
          </Link>
        </Box>
      </ThemeProvider>

    </>
  );

  const DrawerList = (
    <>
      <ThemeProvider theme={theme}>

        <Box
          sx={{
            width: { xs: "100%", sm: 320 },
            height: "100vh",
            backgroundColor: "#171717",
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
        >
          <Box
            sx={{
              height: { xs: "60px", sm: "80px" },
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              p: 2,
            }}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon
                sx={{ color: "white", fontSize: { xs: "24px", sm: "32px" } }}
              />
            </IconButton>
          </Box>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
          <List>
            {drawerLinks.map((link) => (
              <React.Fragment key={link.text}>
                <ListItem

                  onClick={() => {
                    toggleDrawer(false)()
                  }}
                  sx={{
                    height: { xs: "50px", sm: "60px" },

                    backgroundColor: expanded[link.text] ? "rgba(255,255,255,0.1)" : "none",
                    display: "flex",
                    justifyContent: "center", // Center align the main text and icon
                  }}
                >
                  {link.href ? (
                    <Link href={link.href} passHref style={{ width: "100%" }}>
                      <ListItemText
                        primary={link.text}
                        primaryTypographyProps={{
                          color: "white",
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: { xs: "16px", sm: "20px" },
                        }}
                      />
                    </Link>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",

                        pl: 2,
                      }}
                    >
                      <ListItemText
                        primary={link.text}
                        primaryTypographyProps={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: { xs: "16px", sm: "20px" },
                        }}
                      />

                    </Box>
                  )}
                </ListItem>

              </React.Fragment>
            ))}
          </List>
        </Box>
      </ThemeProvider>
    </>

  );

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          background: "white",
          transition: "background-color 0.3s ease",
          boxShadow: 0,
          color: "black",
          height: { xs: "60px", sm: "70px", md: "80px" },
          width: "100%",

        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1600px",
            margin: "0 auto",
            width: "100%",
            px: { xs: 2, sm: 4, md: 6 },

          }}
        >
          <Link href="/">

            <Box
              sx={{
                width: { xs: "200px", sm: "200px", md: "150px" },
                height: 'auto',
                pt: { xs: 1, sm: 1, md: 0 },
                pb: { xs: 2 }
              }}
            >
              <Image
                src="/Innoblooms.png"
                alt="Innoblooms Logo"
                width={300}
                height={10}
                layout="responsive"
              />
            </Box>

          </Link>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
              alignItems: "center",
              height: "100%",

            }}
          >
            <NavLinks />
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                xl: "none",
                lg: "none",
              },
              height: "40px",
              width: "40px",
              mr: { xs: 5, sm: 8, md: 0 },
              mb: 2
            }}
          >
            <MenuIcon sx={{
              fontSize: { xs: "30px", sm: "40px" }, display: {
                xs: "block",
                sm: "block",
                md: "block",
                xl: "none",
                lg: "none",
              },
            }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 320 },


          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Header;
