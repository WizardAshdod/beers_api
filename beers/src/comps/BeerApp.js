import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BeerNav from './BeerNav';
import { Beers } from './Beers';
import { Pagination } from './Pagination';

const BeerApp = () => {
  const [beers, setBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [ beerPerPage] = useState(9)
  const [totalPages, setTotalPages] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  
  console.log(beers.length)
  console.log(currentPage)
  const url = searchTerm ? `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=80&beer_name=${searchTerm}`  : `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=80`
  
  const fetchBeers = async () => {
    try {
      const response = await axios.get(url);
      setBeers(response.data);
      const totalItems = response.headers['x-total-count'];
      setTotalPages(Math.ceil(totalItems / beerPerPage));

    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, [ searchTerm,currentPage]);
 console.log('beer=', beers)

  const indexOfLastBeer = currentPage * beerPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beerPerPage;
  const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer )

  const paginate = pageNumber => setCurrentPage(pageNumber)
  
  const handleSubmit = (evt) => evt.preventDefault() 
  return (
    <div>
         <div className="search_cont">
             <h4>Search The BrewDog Beers ? </h4>
                <form className="nav_search" onSubmit={handleSubmit}>
                   <input type={"text"} onChange={(evt)=> setSearchTerm(evt.target.value)}></input>
                   <button>Search</button>
                 </form>
                
          </div>
       <Beers beers={currentBeers}   />
       <Pagination beerPerPage={beerPerPage} totalBeers={beers.length} currentPage={currentPage}
          paginate={paginate}/>
    </div>
  );
 
};

export default BeerApp;
