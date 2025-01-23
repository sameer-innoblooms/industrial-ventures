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
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
  useMediaQuery,
  Link,
} from "@mui/material";
import { styled, alpha, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import theme from "../theme";


const Animation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
  { text: "ABOUT US", href: "#", hasSubmenu: false },
  { text: "PRODUCT", href: "#", hasSubmenu: false },
  // { text: 'PAGE', hasSubmenu: true },
  { text: "BLOG", href: "#" },
  { text: "CONTACT", href: "#", hasSubmenu: false },
];

export default function Navbar() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmenuClick = (item: string) => {
    setOpenSubmenu(openSubmenu === item ? null : item);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((item) => (
          <Box key={item.text}>
            <Link
              href={item.href}
              sx={{
                color: "black",
              }}
            >
              <ListItemButton
                onClick={() => item.hasSubmenu && handleSubmenuClick(item.text)}
              >
                <ListItemText
                  // primary={item.text}
                  sx={{
                    // color: "black",
                  }}
                />
                {item.hasSubmenu &&
                  (openSubmenu === item.text ? <ExpandLess /> : <ExpandMore />)}
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
    <Animation>
        <Box sx={{ bgcolor: "#f8f9fa", py: 1 }}>
          <Container>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 3 }}
                sx={{ flex: 1 }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailIcon
                    fontSize="small"
                    sx={{
                      color: "text.primary",
                    }}
                  />
                  <Typography variant="body2" noWrap>
                    industrialventures21@domain.com
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneIcon
                    fontSize="small"
                    sx={{
                      color: "text.primary",
                    }}
                  />
                  <Typography variant="body2" noWrap>
                    (+91) 8272833134
                  </Typography>
                </Stack>
              </Stack>
              <IconButton >
                <ShoppingCartIcon
                  sx={{
                    color: "text.primary",
                  }}
                />
              </IconButton>
            </Stack>
          </Container>
        </Box>

        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{
            // bgcolor: theme.palette.background.paper, // Quill Gray background
          }}
        >
          <Container>
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <Image src="/Logo.png" alt="Logo" height={100} width={100} />
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
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
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
                  {menuItems.map((item) => (
                    <Link href={item.href} key={item.text} color="#000">
                      <Button
                        sx={{
                          bgcolor: 'transparent',
                          color: 'text.primary'
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
    </ThemeProvider>
      
    </>
  );
}
