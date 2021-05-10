import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ShowBeer() {

  const { beerId } = useParams()
  const [beer, setBeers] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`)
      console.log(response.data)
      setBeers(response.data)
      
    }
    getData()
  },[beerId])

  return (

    <section>
      <h1> hello</h1>
      <div>  
        <p>hellloooooo</p>
        { beer ? 
          <div key={beer.id}>
            <h3>{beer.name}</h3>
            <p>{beer.first_brewed}</p>
            <img src={beer.image_url} alt={beer.name}/>  
            <h4>{beer.abv}</h4>
            <p>{beer.description}</p>
            <p>{[0].food_pairing}</p>
          </div>
          :
          <p>... Loading</p>
        }
      </div>

    </section>
  )  
    

}

export default ShowBeer