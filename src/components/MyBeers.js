function Mybeers() {

  const favBeer = window.localStorage.getItem('beer')
  console.log(favBeer)



  return (
    <h4>{favBeer}</h4>
  )

}


/// add beer id as value for button, create a function to handle the click. 



///setItem in window.loacalStorage (by id)

///push the local storage data to an empty array, which we can call myBeersArray =[]

/// [...myBeersArray, newBeer]

/// display beer in local storage on my beers page




export default Mybeers


