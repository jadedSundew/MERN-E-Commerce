import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Rating from './Rating';


import { IconContext } from "react-icons";

const useStyles = makeStyles({
  root: {
  //  maxWidth: 345,

  },
  media: {
    height:420,
  }
});

const Product = ({product}) => {

   const classes = useStyles()
  return ( 
   
             <Grid key={product._id} item xs={12} sm={6} md={4}>
           <Card className={classes.root}>
      <CardActionArea href={"/product/" + product._id}>
        <CardMedia
          className={classes.media}     
          image={product.image}
          title={product.name}
        /> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <IconContext.Provider value={{color:"#FFE807"}}>
          <Rating rating={product.rating} numReviews={product.numReviews} ></Rating>
          </IconContext.Provider>
          
          <Typography variant="body2" color="text.secondary">
           {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        
        </Grid>
   );
}
 
export default Product;