
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div>
            
            <Link to="/BeerIndex">Beers</Link>
            <Link to="/">Home</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
