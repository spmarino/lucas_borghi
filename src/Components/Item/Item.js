import React from 'react';
import "./Item.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



export default function Item({product}) {
  const {id,producto, descripcion, image} = product
  return (
    <div className="box">
      <Card sx={{ maxWidth: 200}}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={producto}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto}
          </Typography>
          <Typography gutterBottom variant="h7" component="div" sx={{ height: 100}}>
            {descripcion}
          </Typography>
          <Link to={`/item/${id}`}>
            <button className="detalle">Ver Detalles</button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
