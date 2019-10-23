import React,{Component} from 'react';                 
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
//import {robots} from './Robot'
import Scroll from '../components/Scroll';



 class  App extends Component { 
    constructor() {
    	 super()
    	this.state = {
    		        robots: [],
    		        searchfield : ''
    	          }
    }

    componentDidMount() {
    	fetch('https://jsonplaceholder.typicode.com/users')
    		.then(responce=> responce.json())
    	    .then(users => this.setState({ robots : users}))
    	
    }

    onserchchange = (event) => {
    	this.setState({ searchfield: event.target.value })
    	
            
    }

  render(){
         const filterrobot = this.state.robots.filter(robot =>{
    		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
           })

          return (  
         <div className='tc '>
         <h1 className='ma0 f1 pv4 i .near-black '>RoboFriends</h1>
         <SearchBox searchChange={this.onserchchange}/>
        <Scroll>
       
         <CardArray robots= {filterrobot} />
               </Scroll>
         </div>
         

	);
}
}

export default App;



