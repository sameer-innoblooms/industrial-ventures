import { Box } from "@mui/material";
import Dashboard from "./Dashboard";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ["greek-ext"],
})


export default function Home() {
  return (
    <>
    <Box className={roboto.className}>

    <Dashboard/>
    </Box>
    </>
  );
}
