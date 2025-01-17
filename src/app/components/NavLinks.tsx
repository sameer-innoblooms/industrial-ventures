
'use client'

import { usePathname } from 'next/navigation';
import { Box, Link, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: <HomeIcon/> },
  {
    name: 'Project',
    href: '/project',
    icon: <ArticleIcon/>
  },
  { name: 'Customers', href: '/dashboard/customers', icon:<PermIdentityIcon/>  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <Stack direction="column" spacing={2}>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            underline="none"
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'start' },
              alignItems: 'center',
              gap: 2,
              height: { xs: 48, md: 'auto' },
              p: { xs: 3, md: 2 },
              px: { xs: 3, md: 3 },
              borderRadius: 'md',
              backgroundColor: pathname === link.href ? 'sky.100' : 'grey.50',
              color: pathname === link.href ? 'blue.600' : 'inherit',
              '&:hover': {
                backgroundColor: 'sky.100',
                color: 'blue.600',
              },
            }}
          >
            {/* <LinkIcon sx={{ width: 6 }} />s */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>{link.name}</Box>
          </Link>
        );
      })}
    </Stack>
  );
}