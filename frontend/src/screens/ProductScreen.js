import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Rating from '../components/Rating';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox'
import { useEffect } from 'react';
import { detailsProduct } from '../redux/actions/productAction';


const useStyles = makeStyles({
  root: {
   maxWidth: 345,
   padding: "1rem"

  },
  media: {
    height:420,
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const ProductScreen = (props) => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector(state => state.productDetails);
  const {isLoading, error, product} = productDetails;


  useEffect(() => {

    console.log('Product Screen props is', props);

    dispatch(detailsProduct(productId));

  }, [dispatch, productId, props]);
  

console.log(props)

  return ( 

    <Box >

     {isLoading ? (
     
         <Box className="loader-div">
        
     <Loading ></Loading>
     </Box>
     
    
     ) : 
      error ? <>
       <DrawerHeader />
      
      <MessageBox variant="danger">{error}</MessageBox>
      </> :
     (
      <>
      <DrawerHeader />
  <Link to="/">Back to Result</Link>
    <div className="row">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>       
        </div>
        <div className="col-1">
          <ul>
            <li>
               {product.name}
            </li>        
            <li>
              <IconContext.Provider value={{color:"#FFE807"}}>
              <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
              </IconContext.Provider>
            </li>
            <li>
              Price: ${product.price}
            </li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <Card className={classes.root}>
            <CardContent>
              <ul>
                <li>
                  <div className="row">
                    <div>Price: </div>
                    <div className="price">${product.price}</div>
                  </div>
                </li>
                <li>
                   <div className="row">
                    <div>Status: </div>
                    <div className="status">
                    {product.countInStock > 0 ? (<span className="success">
                        In Stock
                        </span>) :

                       ( <span className="danger">
                          Out of Stock
                      </span>)}
                      </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                  <Button variant="contained">
                    Add To Cart
                  </Button>
                  </div>
                  
                </li>
              </ul>

            </CardContent>
          </Card>

        </div>

      </div> 
      </>

     )   
     }
           
        </Box>

   );
}
 
export default ProductScreen;