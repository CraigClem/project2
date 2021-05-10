import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function BeerIndex() {
  const [beers, setBeers] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      setBeers(response.data)
      // console.log(response.data)
    }
    getData()
  },[])
  console.log(beers)

  return ( 
    <> {
      beers ? 

        beers.map(beer =>  {
          return  <Link key={beer.id} to={`/beers/${beer.id}`}>
            <div key={beer.id}> 
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <img src={beer.image_url} alt={beer.name} />
            </div>
          </Link>
        }
        )
        :       
        <p>Loading....</p>
    }
    </>
  )

}

export default BeerIndex