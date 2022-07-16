import React from 'react';
import "./Box.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const MoreDeets = () => {
  const cardInfo = [
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
    {
      image: "https://images.prismic.io/ascendaloyaltycorp/74725b6f-2f69-41d4-94a2-67c4ea3cf01c_Ascenda_Clients_Barclays.png?auto=compress,format",
      companyName: "Barclays",
      exchangeRate: "1400  points to 400  miles",
      exchangeTime:"4  to  6  hours",
      minAmount:"1400 points",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card sx={{ maxWidth: 345 }} key={index} className="box">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={card.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Exchange Rate: {card.exchangeRate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Estimated Transfer Time: {card.exchangeTime}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Minimum transfer amount: {card.minAmount}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Transfer
        </Button>
      </CardActions>
    </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;
