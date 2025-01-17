import { Box, Button, Link, Stack } from '@mui/material';
import PowerIcon from '@mui/icons-material/Power';
import Image from 'next/image';
import NavLinks from './NavLinks';


export default function  SideNavBar() {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // height: '100%',
        p: { xs: 3 },
        
      }}
    >
      {/* <Link href="/" underline="none">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'end',
            height: { xs: 20, md: 40 },
            borderRadius: 'md',
            backgroundColor: 'blue.600',
            p: 4,
          }}
        > */}
          {/* <Box sx={{ width: { xs: 32, md: 40 }, color: 'white' }}>
            <Image
            src="/Innoblooms.png"
            alt="Innoblooms Logo"
            width={32}
            height={32}
            
            />
          </Box> */}
          {/* </Box> */}
        {/* </Link> */}
      </Box>
      <Stack
        direction={{ xs: 'row', md: 'column' }}
        justifyContent="space-between"
        spacing={{ xs: 2, md: 2 }}
        sx={{ flexGrow: 1, pt: 10 }}
      >
        <NavLinks />
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            height: 'auto',
            width: '100%',
            flexGrow: 1,
            borderRadius: 'md',
            backgroundColor: 'grey.50',
          }}
        />
        {/* <form>
          <Button
            variant="contained"
            sx={{
              height: { xs: 48, md: 'auto' },
              width: { xs: '100%', md: 'auto' },
              justifyContent: { xs: 'center', md: 'start' },
              p: { xs: 3, md: 2 },
              px: { xs: 3, md: 3 },
              gap: 2,
              borderRadius: 'md',
              backgroundColor: 'grey.50',
              '&:hover': {
                backgroundColor: 'sky.100',
                color: 'blue.600',
              },
            }}
          >
            <PowerIcon sx={{ width: 6 }} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>Sign Out</Box>
          </Button>
        </form> */}
      </Stack>
    
    </>
    
  )}
