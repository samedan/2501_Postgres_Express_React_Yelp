### SQl Commands

> https://neon.tech/postgresql/postgresql-tutorial/postgresql-insert#introduction-to-postgresql-insert-statement

-cmd- psql
\? - Help
\l - View all Databases
--Create Database -> CREATE DATABASE newname;
--Connect to DBB -> \c newdatabase

-- See Tables in DBB -> \d
-- See Table content -> \d products

-- ADD COLUMN -> ALTER TABLE products ADD COLUMN featured boolean;
-- DELETE COLUMn -> ALTER TABLE products DROP COLUMN featured;
-- DELETE TABLE -> DROP TABLE products;
-- DELETE DBB -> DROP DATABASE practice;

### New Database

> CREATE DATABASE yelp;

> CREATE TABLE restaurants; -> db.sql

> INSERT INTO restaurants -> db.sql

> SELECT \* FROM resturants;

> UPDATE restaurants SET name = 'EdItTaco', location='miami', price_range='1' WHERE id = 4 RETURNING \*;

> DELETE FROM restaurants WHERE id = 3;

### NEW Independant Table Reviews

```
CREATE TABLE reviews (
 id BIGSERIAL NOT NULL PRIMARY KEY,
 name VARCHAR(50) NOT NULL,
 review TEXT NOT NULL,
 rating INT NOT NULL check(rating>=1 AND rating <=5)
);
```

## Insert Independant table Review

> INSERT INTO reviews (name, review, rating) VALUES ('carl', 'cool restaurant', 5);
