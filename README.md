### Source

> https://www.youtube.com/watch?v=J01rYl9T3BU&ab_channel=freeCodeCamp.org

### This Git

> https://github.com/samedan/2501_Postgres_Express_React_Yelp

### Source Git

> https://github.com/Sanjeev-Thiyagarajan/PERN-STACK-YELP-CLONE

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

# New Table command

```
CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating>=1 AND rating <=5)
);
```

> ![Reviews table](https://github.com/samedan/2501_Postgres_Express_React_Yelp/blob/main/_public/printscreens/01printscreen.jpg)

# Insert into reviews

> INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (9000, 'carl', 'cool restaurant', 5);
> select \* from reviews WHERE restaurant_id=123;

### POST Review

> server.js -> app.post("/api/v1/restaurants/:id/addReview",...)

### Count of Ratings for a Restaurant

> SELECT COUNT(rating) FROM reviews WHERE restaurant_id = 123;

### Average Rating for a Restaurant

> SELECT TRUNC(AVG(rating),2) AS avg_rating FROM reviews WHERE restaurant_id = 2;

> ![Rating average](https://github.com/samedan/2501_Postgres_Express_React_Yelp/blob/main/_public/printscreens/02printscreen.jpg)

### GROUP count results

> SELECT location, COUNT(location) FROM restaurants GROUP BY location;

> ![Count group](https://github.com/samedan/2501_Postgres_Express_React_Yelp/blob/main/_public/printscreens/03printscreen.jpg)

> ![Count group](https://github.com/samedan/2501_Postgres_Express_React_Yelp/blob/main/_public/printscreens/04printscreen.jpg)

### JOIN data from TWO Tables

> SELECT \* FROM restaurants INNER JOIN reviews ON restaurants.id = reviews.restaurant_id;

> ![Join Tables](https://github.com/samedan/2501_Postgres_Express_React_Yelp/blob/main/_public/printscreens/05printscreen.jpg)

### Final Full Query All Restaurants

> SELECT \* FROM restaurants LEFT JOIN (SELECT restaurant*id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id;

> ![Final Query](https://github.com/samedan/2501_Postgres_Express_React_Yelp/blob/main/_public/printscreens/06printscreen.jpg)

> server.js -> add count, average_rating with each 'row' result

### Final Full Query ONE restaurant

```
SELECT * FROM restaurants LEFT JOIN
  (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1)
    AS average_rating
    FROM reviews
  GROUP BY restaurant_id) reviews
  ON restaurants.id = reviews.restaurant_id
  WHERE id = 123;
```
