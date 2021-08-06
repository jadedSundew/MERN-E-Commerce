import {BsStarFill} from 'react-icons/bs';

import {BsStarHalf} from 'react-icons/bs';

import {BsStar} from 'react-icons/bs';


const Rating = ({rating, numReviews}) => {
  return ( 

    <div>
      {rating >= 1 ? <BsStarFill></BsStarFill> : rating >= 0.5 ? 
      <BsStarHalf></BsStarHalf> : <BsStar></BsStar>
    }

    {rating >= 2 ? <BsStarFill></BsStarFill> : rating >= 1.5 ? 
    <BsStarHalf></BsStarHalf> : <BsStar></BsStar> 
  }

  {rating >= 3 ? <BsStarFill></BsStarFill> : rating >= 2.5 ? 
  <BsStarHalf></BsStarHalf> : <BsStar></BsStar>  

}

{rating >= 4 ? <BsStarFill></BsStarFill> : rating >= 3.5 ? 
<BsStarHalf></BsStarHalf> : <BsStar></BsStar>
}

{rating >= 5 ? <BsStarFill></BsStarFill> : rating >= 4.5 ?
<BsStarHalf></BsStarHalf> : <BsStar></BsStar>
}

<span>
  {numReviews + 'reviews'}
</span>

    </div>
  );
}
 
export default Rating;