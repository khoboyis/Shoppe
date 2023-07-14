import React from 'react';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Body.css';

export default function MediaCard() {
  return (

        <div class="container">

          <div class="row">
          <div class="col-md-4">
            
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
        sx={{ height: 350 }}
        image= {img7}
        title="Lira Earrings"/>
       
      <CardContent >
        <Typography gutterBottom variant="h6" component="div"  >
        Lira Earrings

        </Typography>
        <Typography variant="body2" color="text.secondary">
        $ 20,00
        </Typography>
        
      </CardContent>
     
      <CardActions>
        
      </CardActions>
    </Card>
    </div>


    <div class="col-md-4">
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 350 }}
        image= {img2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Hal Earrings

        </Typography>
        <Typography variant="body2" color="text.secondary">
        $ 25,00
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>

    <div class="col-md-4">
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 350 }}
        image= {img3}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Kaede Hair Pin Set Of 3

        </Typography>
        <Typography variant="body2" color="text.secondary">
        $ 30,00
        </Typography>
      </CardContent>
      <CardActions>
     
      </CardActions>
    </Card>
    </div>

    <div class="col-md-4">
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 350 }}
        image= {img4}
        title="Hair Pin Set of 3"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Hair Pin Set of 3

        </Typography>
        <Typography variant="body2" color="text.secondary">
        $ 30,00
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
    <div class="col-md-4">
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 350 }}
        image= {img5}
        title="Plaine Necklace"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Plaine Necklace

        </Typography>
        <Typography variant="body2" color="text.secondary">
        $ 19,00
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
    <div class="col-md-4">
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 350 }}
        image= {img6}
        title="Yuki Hair Pin Set of 3"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Yuki Hair Pin Set of 3

        </Typography>
        <Typography variant="body2" color="text.secondary">
        $ 29,00
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
    </div>
    <hr/>
 
 </div>
    
    
    










  );
}