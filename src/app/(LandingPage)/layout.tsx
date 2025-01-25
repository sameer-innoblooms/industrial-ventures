'use client'

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Home, Description, People } from '@mui/icons-material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ProductTop from './page'
import DashboardLayoutBasic from '../components/SideNav'
import "./globls.css"
import Footer from '../Footer'

const drawerWidth = 260

const menuItems = [
  { text: 'Industrial Pumps', icon: <Home />, href: '/product' },
  { text: 'Sewage Treatment Equipment', icon: <Description />, href: '/project' },
  { text: 'Submersible', icon: <People />, href: '/customers' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
    <ProductTop/>
    {/* <DashboardLayoutBasic/> */}
    {children}
    <Footer/>
    </>
   
  )
}

