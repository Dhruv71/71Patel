import React from 'react';

const Scroll = (props) => {
   return (
   	<div  style={{ overflowY:'scroll', border: '1px none black', height: '680px' }}>
   	  {props.children}
   	</div>
);
};

export default Scroll;