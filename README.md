This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: PunkAPI
​
## Brief
​
Using React we had 48hrs to create an app which consumned a public API and had several components.
​
### Technolgies
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

This was our first project using React, querying API's and working on a project as a pair. After reviewing various public API's we found a Punk Beer API and felt that there was a good amount of accessible data that we could use to build a small app in 48hrs. As this was the first time coding a project with another person and only having 48hrs, we used VS Code's Live Share Extension so that we could work on the same project at the same time, helping one another and without having the worry about version control. 

## The App

The app is made up of six components:

## Home
This page displays the Brew Dog Logo which when clicked forwards the user to the Beer Index page using { Link } from React-router-dom.

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

The Nav Bar is accessible on all pages as it is not placed within the switch tags on the BrowserRouter.

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

<img src="images /Screenshot 2021-07-26 at 10.08.17.png"/>



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

<img src="images /Screenshot 2021-07-26 at 10.05.38.png"/>

The ShowBeer page is a detailed view of a single beer. We used the { useParams } hook to create a unique path for each beer which was the beer Objects id. [ SetBeers(response.data[0]) ]

We then wrapped our BeerIndex in a Link tag with the to prop directing the user to the specific beer which matched the useParams { beerId }.

```js
 const { beerId } = useParams()

 React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`)
      setBeers(response.data[0])
    }
    getData()
  },[beerId])
 
```
```js
  <Route path="/beers/:beerId" component={ShowBeer} />
``` 

```js 
return  <Link key={beer.id} to={`/beers/${beer.id}`}>
```


## MyBeers 

We created the MyBeers component so that user could create and store a list of the beers they had tried or of their favourite beers. Within the ShowBeer component we added a button which when clicked, stored the specific beer in local storage using setItem, updated the favBeerArray and then pushed the user to the myBeers page using the useHistory hook. 

```js
const history = useHistory()
```

```js

let favBeerArray = []

```


```js

 const handleClick = () => {
    const favBeers = JSON.parse(window.localStorage.getItem('beers')) || []
    favBeerArray = [...favBeerArray, beer]
    favBeers.push(beer)
    localStorage.setItem('beers',JSON.stringify(favBeers))
    history.push('/myBeers')
  
  }

 ``` 

 We then got the favourite beer array from local storage and displayed each items name from the array.

 ```js
function MyBeers(beer) {

  const favBeers = JSON.parse(window.localStorage.getItem('beers'))
  console.log(favBeers)

  return (
    <>
      <p>My Beers</p>
      <div className="favBeers">
        <ul key={beer.id}>
          <li>
            {favBeers.map(beer => beer.name)}
          </li>
        </ul>
      </div>
    </>
  )
}
  
export default MyBeers

 ```


## About

The About page is a static page displaying a single image for aesthetics only. 

```js

function About() {

  return (
    <div className="about-container">
      <img className="about" src="https://creativesupply.com/wp-content/uploads/2018/07/05_BrewDog-810x540.png" alt="about"/>
    </div>
  )

}

export default About

```

## Challenges

As this was a fast paced project and React being something completely new to me there were a number of bumps along the road! Mapping the data and displaying it in the browser took longer than I had hoped and this was mainly down to getting to grips with the syntax for JS when in JSX. The second challenge I faced was creating the filter function and lastly to create the Favourite Beers section, it took me a little longer than I hoped to grasp spreading the array and updating and also Parsing as JSON.

Lastly, due the above challenges the CSS was neglected so I intend on revisiting this project and updating all of the styling to offer a more polished, complete product.  

## Wins 

Overall, I really enjoyed using React as JavaScript Library and appreciated how rapidly you can create which to user can appear to be a complex multi-page site and I'm excited to create more using React and gain a deeper understanding of useState, life cycles and many of the other hooks it has to offer. So, in short, this project has helped widen my scope for how to build an app and the benefits of a single page app.

## Lessons Leaned

After spending just over a week learning React and being introduced to the concept of API's and get requests, this fast paced 48hr paired programming challenge helped consolidate the some of the basic fundementals of React, creating a single page app's, making GET requests and also accessing and displaying specific data from API array of Objects.

​

​