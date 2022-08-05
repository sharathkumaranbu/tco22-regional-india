# Topcoder GraphQL MongoDB Demo

### Prerequisites

1. Node.js 12.x and above
2. Docker and Docker compose
3. Postman for testing

### Running MongoDB locally

To run MongoDB with sample data, navigate to `local` directory and execute the command

```
docker-compose up
```

It would spin up the latest mongodb database and load test data into it.

### Installing project dependencies

To install the required dependencies, execute the command

```
npm i
```

If you are on Node 16.15.1 and above, please execute the command

```
npm i --legacy-peer-deps
```

### Start the server

GraphQL server can be started by executing the command

```
npm start
```

or

```
npm run dev
```

### Test via Postman

1. To test the GraphQL server via Postman, Open Postman and import the collection in `docs` directory

2. Start writing your queries in POST request body and trigger the request and get exact data back from the server

3. Postman supports GraphQL auto completion, hence it's easy to create requests with the fields you would require
