import React from 'react';


const Card = (props) => {
      const {id,name,email} = props
  return (  
            
		  <div className='bg-light-green dib tc ma2 br3 pa3  grow bw2 shadow-5'>
		    <img className='h-65 w-65' alt='robot' src={`https://robohash.org/${id}`} />
		   <div>
		    <h2>{name}</h2>
		    <p>{email}</p>
		   </div>
		  </div>
		  

	     );
   }
 

 export default Card;