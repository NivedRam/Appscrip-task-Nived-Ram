import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

function ProductCard({data}) {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Card sx={{ maxWidth: 345,height:400}}>
      {/* <CardMedia
        sx={{ height:"480px",objectFit:"cover" }}
        image={data.image}
        title="green iguana"
      /> */}
     <Box sx={{width:"100%",height:"300px"}}>
       <img style={{objectFit:"contain",width:"100%",height:"100%"}} src={data.image}/>
     </Box >
      <CardContent>
        <Typography sx={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"300px"}} gutterBottom variant="h6" component="div">
          {data.title}
        </Typography>
      <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignContent:"center",alignItems:"center"}}>
          <Typography  variant="body2" color="text.secondary">
        Sign In or Create an account to see pricing 
          </Typography>
          <img style={{ marginBottom:isMobile?"50px":"0px"}} src="/icons/heart.svg" alt="Favourite" />
      </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
