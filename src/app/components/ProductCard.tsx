import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface ProductCardProps {
  name: string;
  image: string;
  salePercentage?: number;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: "400px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const SaleTag = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
  backgroundColor: '#1C4B84',
  color: "white",
  padding: "4px 8px",
  borderRadius: 4,
}));

export default function ProductCard({
  name,
  image,
  salePercentage,
}: ProductCardProps) {
  return (
    <StyledCard>
      {salePercentage && (
        <SaleTag>
          <Typography variant="caption">{salePercentage}% SALE</Typography>
        </SaleTag>
      )}
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{ objectFit: "contain", p: 2 }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h6" component="div" sx={{
            pl: 2,
                position: 'absolute', 
                bottom: 50, 
                left: 0, 
                right: 0
        }} >
          {name}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: "auto",
            bgcolor: '#1C4B84'
           }}
        >
          ADD TO CART
        </Button>
      </CardContent>
    </StyledCard>
  );
}
