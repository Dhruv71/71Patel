import React from 'react';

const SearchBox = ({ searchfield,searchChange }) =>
{
  return(
        <div>
        <input className=' bg-light-green ba2 b--black pa2' type='Search' 
         placeholder='search robots'
         onChange={searchChange} 
         />
        </div>
  	);

}

export default SearchBox;