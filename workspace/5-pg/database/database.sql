CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

SELECT * FROM users;

INSERT INTO users (name, email) VALUES ( 'joe', 'joe@ibm.com'), ('Ryan', 'ryan@ibm.com');