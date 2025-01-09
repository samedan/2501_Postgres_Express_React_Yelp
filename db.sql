CREATE TABLE products (
  id INT,
  name VARCHAR(50),
  price INT,
  on_sale boolean
);


CREATE TABLE restaurants (
 id BIGSERIAL NOT NULL,
 name VARCHAR(50) NOT NULL,
 location VARCHAR(50) NOT NULL,
 price_range INT NOT NULL
);

INSERT INTO restaurants (id, name, location, price_range) values(123, 'McDonalds', 'New York', 3);
