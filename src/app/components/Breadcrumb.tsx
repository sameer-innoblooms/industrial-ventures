// import { Breadcrumbs, Link, Typography } from '@mui/material';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import AnimationLeft from './AnimationLeft';

// export interface BreadcrumbProps {
//   items: Array<{
//     label: string
//     href: string
//     active?: boolean
//   }>
// }

// export function Breadcrumb({ items }: BreadcrumbProps) {
//   return (
//     <AnimationLeft>
//           <Breadcrumbs
//       separator={<NavigateNextIcon fontSize="small" sx={{ color: 'white' }} />}
//       aria-label="Breadcrumb"
//       sx={{ zIndex: 9, display: 'flex', alignItems: 'center', gap: 2 }}
//     >
//       {items.map((item, index) => (
//         <Link
//           key={item.label}
//           href={item.href}
//           underline={item.active ? 'none' : 'hover'}
//           sx={{
//             fontSize: '1rem',
//             color: item.active ? 'white' : 'white',
//             // opacity: item.active ? 1 : 0.7,
//             '&:hover': {
//               color: 'white',
//             },
//           }}
//         >
//           <Typography variant="body2">{item.label}</Typography>
//         </Link>
//       ))}
//     </Breadcrumbs>
//     </AnimationLeft>

//   );
// }



import { Breadcrumbs, Link, Typography, useMediaQuery } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AnimationLeft from './AnimationLeft';
import theme from '../theme';

export interface BreadcrumbProps {
  items: Array<{
    label: string
    href?: string
    active?: boolean
  }>
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
        {isMobile ? (   
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={{ color: 'white' }} />}
        aria-label="Breadcrumb"
        sx={{ zIndex: 9, display: 'flex', alignItems: 'center', gap: 2 }}
      >
        {items.map((item) => (
          item.href === '/' ? (

            <Link
              key={item.label}
              href={item.href}
              underline="hover"
              sx={{
                fontSize: '1rem',
                color: 'white',
                '&:hover': {
                  color: 'white',
                },
              }}
            >
              <Typography variant="body2">{item.label}</Typography>
            </Link>


          ) : (
            <Typography
            key={item.label}
            variant="body2"
            sx={{
              fontSize: '1rem',
              color: 'white',
            }}
          >
            {item.label}
          </Typography>
          )
        ))}
      </Breadcrumbs>
   ):(    <AnimationLeft>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={{ color: 'white' }} />}
        aria-label="Breadcrumb"
        sx={{ zIndex: 9, display: 'flex', alignItems: 'center', gap: 2 }}
      >
        {items.map((item) => (
          item.href === '/' ? (

            <Link
              key={item.label}
              href={item.href}
              underline="hover"
              sx={{
                fontSize: '1rem',
                color: 'white',
                '&:hover': {
                  color: 'white',
                },
              }}
            >
              <Typography variant="body2">{item.label}</Typography>
            </Link>


          ) : (
            <Typography
            key={item.label}
            variant="body2"
            sx={{
              fontSize: '1rem',
              color: 'white',
            }}
          >
            {item.label}
          </Typography>
          )
        ))}
      </Breadcrumbs>
    </AnimationLeft>)}

    </>

  );
}