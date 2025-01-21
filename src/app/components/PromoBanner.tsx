import { Paper, Typography, Button, Box } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledPaper = styled(Paper)(({ theme }) => ({
  // background: theme.palette.primary.main,]
  backgroundColor: '#1C4B84',
  color: "white",
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: 8,
}))

export default function PromoBanner() {
  return (
    <StyledPaper>
      <Typography variant="h4" gutterBottom>
        Best Product Deals
      </Typography>
      <Typography variant="body1" paragraph>
        We Give the Best Deals in the Market 
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ alignSelf: "flex-start", borderColor: "white", color: "#1C4B84", bgcolor: 'white' }}
      >
        SEE PRODUCT
      </Button>
    </StyledPaper>
  )
}

