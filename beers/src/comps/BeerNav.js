
import {useState} from 'react'

import './nav.css'

 function BeerNav(Beers){
    const [search, setSearch] = useState('')
    const handleSubmit = (evt) => evt.preventDefault() 
  
    return(
        
        <div className="search_cont">
             <h4>what's Ya Looking for ? </h4>
                <form className="nav_search" onSubmit={handleSubmit}>
                   <input type={"text"} onChange={(evt)=> setSearch(evt.target.value)}></input>
                   <button>Search</button>
                 </form>
                

        </div>
    )
   
}
export default BeerNav