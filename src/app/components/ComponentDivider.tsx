'use client'
import type React from "react"
import { Box, type BoxProps } from "@mui/material"


interface CustomDividerProps extends BoxProps {
  variant?: "wave" | "diagonal" | "chevron" | "dots" | "wave1"
  color?: string
  backgroundColor? : string
  height?: number | string
}

const CustomDivider: React.FC<CustomDividerProps> = ({
  variant = "wave",
  color = "primary.main",
  bgcolor = "black",
  height = "100px",
  ...props
}) => {
    // return "M0,100 C150,50 350,150 500,100 L500,0 L0,0 Z"
    //        return "M0,0 C150,100 350,0 500,100 L500,0 L0,0 Z"

 
  const getPath = () => {
    switch (variant) {
      case "wave1": 
    //   return  "M0 ,0 C150,70 350,0 500,100 L500,0 L0,0 Z"
    return "M500,0 C350,100 150,0 0,100 L0,0 L500,0 Z"
    // return "M500,100 C350,0 150,100 0,0 L0,100 L500,100 Z";
    case "wave":
        return "M0,100 C150,0 350,100 500,0 L500,100 L0,100 Z";



      case "diagonal":
        return "M0,0 L500,100 L500,100 L0,100 Z"
      case "chevron":
        return "M0,100 L250,0 L500,100"
      case "dots":
        return
      default:
        return "M0,50 C150,0 350,100 500,50 L500,100 L0,100 Z"
    }
  }

  if (variant === "dots") {
    return (
      <Box
        sx={{
          height,
          width: "100%",
          background: `radial-gradient(${color}  3px, transparent 3px)`,
          bgcolor: `${bgcolor}`,
          backgroundSize: "30px 30px",
          ...props.sx,
        }}
        {...props}
      />
    )
  }

  return (
            <Box
      sx={{
        height,
        width: "100%",
        overflow: "hidden",
        ...props.sx,
      }}
      {...props}
    >
      <svg viewBox="0 0 500 100" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
        <path d={getPath()} fill={color} />
      </svg>
    </Box>

  )
}

export default CustomDivider

