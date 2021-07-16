This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: PunkAPI
​
## Brief
​
Using React we had 48hrs to create an app which consumned a public API and had several components.
​
### Technnolgies
​
- React
- Node.js
- Axios
- Express 
- CSS
- Sass
- HTML
- JavaScript
​
---
​
## Approach

This was our first project using React, querying API's and working on a project as a pair. After reviewing various public API's we found a Punk Beer API and felt that there was a good amount of accessible data that we could use to build a small app in 48hrs.

## The App

The app is made up of six components:

## Home
This page displays the Brew Dog Logo which when clicked forwards the user to the Beer Index page using { Link } from React-router-dom

```js

function Home() {
  return (
    <Link to= "/BeerIndex">
      <div className="home-container" >
        <img className="logo" src="https://i.pinimg.com/originals/ea/b6/5b/eab65bccd941cb4ee55d5880c4419aa8.jpg" alt ="brewdog" />
      </div>
    </Link>
  )
}

```


## Navbar

The Nav Bar is accessible on all pages as it is not placed within the switch tags on the BrowserRouter

```js 

 <BrowserRouter> 
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers/:beerId" component={ShowBeer} />
        <Route path="/BeerIndex" component={BeerIndex} /> 
        <Route path="/About" component={About}/>
        <Route path="/myBeers" component={MyBeers} />
      </Switch>
    </BrowserRouter>

  ```  
And we Route each path to its component.   


## BeerIndex

The BeerIndex is where most the apps functionality takes place as this where we make our async GET requests to the API, set state and display the results. We used React.UseState and Axios to make our GET requests on the intital page mount and then stored the results in state (setBeers).

```js
  const [beers, setBeers] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      setBeers(response.data)

    }
    getData()
  },[])

```

Once we had accessed the array of objects (beers) and stored the data we could then map() the results and using JSX display the data on the page using the dot notation. 

```js

{
        beers ? 

          filterBeers().map(beer =>  {
            return  <Link key={beer.id} to={`/beers/${beer.id}`}>
              <div className="container-beer" key={beer.id}> 
                <div className="text-name">
                  <h1 className ="main-name">{beer.name}</h1>
                  <p>`{beer.tagline}`</p>
                </div>
                <figure>
                  <img className="beers" src={beer.image_url} alt={beer.name} />
                </figure>
              </div>
            </Link> 
          }
          )
          :       
          <p>Loading....</p>
      }

``` 

Within the BeerIndex page we also included a search bar which filters the data from the API based on the beers name and the users search term. For this, we created a filter beers function which we also used to map the data above.

```js 

 function filterBeers() {
    return beers.filter(beer => {
      return (
        beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
    })
  }

```

We then set in state the initial searchTerm for the first page mount which is an empty string and then created a function to handle to the input of the users searchTerm

```js

const [searchTerm, setSearchTerm] = React.useState('')

const handleInput = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
  }

 <input className ="input is-medium" type="text" placeholder="Search... " onChange={handleInput}></input>  

```


## ShowBeer

The ShowBeer page is a detailed view of a single beer. We used { useParms } to 

## MyBeers 


## About
​

​