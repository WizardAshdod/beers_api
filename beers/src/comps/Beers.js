import React from 'react'

export const Beers = ({beers, loading}) => {
 
  
  
    return (
        <div>
        <h1>Beer! Now there’s a temporary solution<p>H.Simpson</p></h1>
        <ul className='beer_list'>
          {beers.map((beer) => (
            <li className='beer_list_item' key={beer.id}>
               <img id='beer_img' src={beer.image_url} alt={beer.name} style={{ width: '50px',height:'150px' }} />
              <h2 id="beer_name">{beer.name}</h2>
              <p id='beer_tagline'>{beer.tagline}</p>
              <p style={{textAlign:'center'}}>{beer.abv}% Alc</p>
              <p id='beer_description'>{beer.description}</p>
              <p id='food_pair'>Food Pairing - {beer.food_pairing.join(', ')}</p>
             
            </li>
          ))}
        </ul>
      </div>
  )
}
