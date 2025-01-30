"use client";

import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Box,
  Container,
  IconButton,
  Stack,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Collapse,
  useMediaQuery,
  Link,
} from "@mui/material";
import { styled, alpha, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
// import Link from "next/link";
import theme from "../theme";
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from "next/navigation";


const Animation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: -50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
  },
}));

const menuItems = [
  { text: "HOME", href: "/", hasSubmenu: false },
  { text: "ABOUT US", href: "/about", hasSubmenu: false },
  { text: "PRODUCT", href: "/product", hasSubmenu: false },
  // { text: 'PAGE', hasSubmenu: true },
  // { text: "BLOG", href: "/blog" },
  { text: "CONTACT", href: "/contact", hasSubmenu: false },
];

export default function Navbar() {
  const pathname = usePathname()
;  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [open, setOpen] = useState(false);




  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmenuClick = (item: string) => {
    setOpenSubmenu(openSubmenu === item ? null : item);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
      <Box
        sx={{
          height: { xs: "60px", sm: "80px" },
          display: "flex",
          justifyContent: "flex-end",
          // alignItems: "center",
          // p: 2,
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon
            sx={{ color: "black", fontSize: { xs: "24px", sm: "32px" } }}
          />
        </IconButton>
      </Box>
        {menuItems.map((item) => (
          <Box key={item.text} sx={{
       
          }}>
            <Link
              href={item.href}
              sx={{
                color: "black",
                textDecoration: "none"
              }}
            >

              <ListItemButton
                onClick={() => item.hasSubmenu && handleSubmenuClick(item.text)}
              >
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: "black",
                    textAlign:'center'
                   
                  }}   
                />
                {item.hasSubmenu &&
                  (openSubmenu === item.text ? <ExpandLess sx={{
                    color: "black",
                  }}/> : <ExpandMore />)}
              </ListItemButton>
            </Link>
            {item.hasSubmenu && (
              <Collapse
                in={openSubmenu === item.text}
                timeout="auto"
                unmountOnExit               
              >
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    {/* <ListItemText primary="Submenu Item 1" /> */}
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    {/* <ListItemText primary="Submenu Item 2" /> */}
                  </ListItemButton>
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
    <ThemeProvider theme={theme}>
      {isMobile? (
          


            <AppBar
              
              position="static"
              color="default"
              elevation={0}
              
              
              sx={{
                // bgcolor: theme.palette.background.paper, // Quill Gray background
                // top: 0
              }}
            >
              <Container>
                <Toolbar disableGutters sx={{ 
                  justifyContent: "space-between" 
                  }}>
                  <Link href='/'>
                  <Image  src="/Logo.png" alt="Logo" height={100} width={95} />
    
                  </Link>
    
                  <Typography
                  variant="h5"
                  component="a"
                  href="/"
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    textDecoration: 'none',
                    
                  }}
                >
                  Industrial Ventures
                </Typography>
    
                  {isMobile ? (
                    <>
                      <IconButton
                        
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                          color:'black',
                          ml:2,
                          
                        }}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Drawer
                        variant="temporary"
                        anchor="right"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                          keepMounted: true, // Better open performance on mobile.
                        }}
                      >
                        {drawer}
                      </Drawer>
                    </>
                  ) : (
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                        border: '2px solid black'
                      }}
                    >
                      {menuItems.map((item) => (
                        <Link href={item.href} key={item.text} color="#000">
                          <Button
                            sx={{
                              bgcolor: '#f5f5f5',
                              color: 'text.primary',
                              mx: '1px',
                              ":hover": {
                                color: 'white',
                                background: 'primary.main'
                              }
                            }}
                            endIcon={
                              item.hasSubmenu ? (
                                <KeyboardArrowDownIcon />
                              ) : undefined
                            }
                          >
                            {item.text}
                          </Button>
                        </Link>
                      ))}
                    </Box>
                  )}
                  
                  <Search
                    sx={{
                      border: 1,
                      borderColor: "grey.300",
                      borderRadius: 1,
                      display: { xs: "none", sm: "none" },
                    }}
                  >
                    <SearchIconWrapper>
                      <SearchIcon sx={{ color: "text.primary" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="electrical"
                      inputProps={{ "aria-label": "search" }}
                      sx={{ color: "#1C4B84" }}
                    />
                  </Search>

                  
                </Toolbar>
              </Container>
            </AppBar>

      ):(
        <Animation>


        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{
            // bgcolor: theme.palette.background.paper, // Quill Gray background
            
          }}
        >
          <Container sx={{
            
          }}>
            <Toolbar disableGutters sx={{ 
              justifyContent: "space-between"
               }}>
              <Link href='/'>
              <Image  src="/Logo.png" alt="Logo" height={105} width={100} />

              </Link>

              <Typography
              variant="h5"
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                textDecoration: 'none',
              }}
            >
              Industrial Ventures
            </Typography>

              {isMobile ? (
                <>
                  <IconButton
                    
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                      color:'black'
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                  >
                    {drawer}
                  </Drawer>
                </>
              ) : (
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {menuItems.filter((item) => !(pathname === "/" && item.href === "/")) // Hide "HOME" on "/"
                  .map((item) => (
                    <Link key={item.text} href={item.href} sx={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          color: pathname === item.href ? "primary.main" : "text.primary", // Active/inactive color
                          // fontWeight: pathname === item.href ? "bold" : "normal",
                          bgcolor: 'transparent',
                          
                          mx: '1px',
                          ":hover": {
                          color: 'black',
                          bgcolor: 'transparent',
                          "&::after":{
                            content: '""',
                            display: 'block',
                            width: '80%',
                            height: '2px',
                            position: 'absolute',
                            bottom: 0,
                            backgroundColor: 'black'
                          }
                        }
                        }}
                        endIcon={
                          item.hasSubmenu ? (
                            <KeyboardArrowDownIcon />
                          ) : undefined
                        }
                      >
                        {item.text}
                      </Button>
                    </Link>
                  ))}
                </Box>
              )}

              <Search
                sx={{
                  border: 1,
                  borderColor: "grey.300",
                  borderRadius: 1,
                  display: { xs: "none", sm: "block" },
                  
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "text.primary" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="electrical"
                  inputProps={{ "aria-label": "search" }}
                  sx={{ color: "#1C4B84" }}
                />
              </Search>
            </Toolbar>
          </Container>
        </AppBar>
      </Animation>
      )}
    </ThemeProvider>
      
    </>
  );
}
