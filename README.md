### Source

> https://www.youtube.com/watch?v=J01rYl9T3BU&ab_channel=freeCodeCamp.org

### This Git

> https://github.com/samedan/2501_Postgres_Express_React_Yelp

# 2501_Postgres_Express_React_Yelp

### Middleware

# Morgan

> https://www.npmjs.com/package/morgan

### Post Gres

> npm i pg

# PG

> https://node-postgres.com/guides/async-express

> /db/index.js

# Parameterized Query

```
// Parameterized Query
  const results = await db.query("SELECT * FROM restaurants where id = $1", [
     req.params.id
  ]);
```

### Client react context

> /client/src/context/RestaurantsContext.js -> export const RestaurantsContext = createContext()

> app.js -> <RestaurantsContextProvider>{children}</...>

### Client link to Backend

> /src/RestaurantFinder.js -> axios.create({baseURL...})

### Add Restaurant

> /src/components/AddRestaurants.jsx

### addRestaurant function exported from Context

> /src/context/RestaurantsContext.js -> addRestaurants in <RestaurantsContext.Provider></RestaurantsContext.Provider>

> update local

### Stop Propagation event

# RestaurantList inner Link stop event passing to Table

> handleUpdate, handleDelete -> e.stopPropagation()

### Get Single Restaurant

# Context

> /src/context/RestaurantContext.js -> const [selectedRestaurant, setSelectedRestaurant] = useState(null);

# RestaurantDetailPage

> const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);
