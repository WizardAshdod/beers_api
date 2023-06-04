import React from 'react'
import './pag.css'
export const Pagination = ({beerPerPage , totalBeers, paginate, currentPage}) => {
  
    const pageNumber = []
    console.log('pag total_beers=',totalBeers)
   
    console.log('current_Page=',currentPage)

    for(let i = 1; i <= Math.ceil(totalBeers / beerPerPage) ;i++){
        pageNumber.push(i)
    }
    console.log('page_number=',pageNumber)
    return (
        <div className='pag'>
            <nav>
               <ul>
                {pageNumber.map(num=> (
                    <li key={num} > 
                        <a className='link' onClick={()=>paginate(num)} href=''>
                        {num} </a>
                    </li>
                ))}
                </ul> 
            </nav>

        </div>
    )
}
