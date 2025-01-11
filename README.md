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
