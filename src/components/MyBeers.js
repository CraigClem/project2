function MyBeers() {

  const favBeers = JSON.parse(window.localStorage.getItem('beers'))
  console.log(favBeers)



  return (
    <>
      <p>My Beers</p>
      <div className="favBeers">
        <ul>
          <li>
            {favBeers.map(beer => beer.name)}
          </li>
        </ul>
      </div>

    </>
  )

}
  
export default MyBeers
