# React for Angular Devs boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The main idea behind this boilerplate is that Angular developers create forks of it and use for the code challenge or play.

**Note: additional packages and scripts has been added in order to optimice the App**

## Recommended Node version

- [Node.js](https://nodejs.org/) v16.13.0 LTS

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
**You will also see any lint errors in the console.**

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Launches the lint from command line.\
**The boilerplate has been configured in order to be mandatory pass the lint without errors before the commit.**

### `npm run mock-server`

Starts one mock server at [http://localhost:3001](http://localhost:3001) that uses db.json \
Mock Server request examples:

- Get all movies: GET [http://localhost:3001/movies](http://localhost:3001/movies)
- Get one movie by id: GET [http://localhost:3001/movies/{id}](http://localhost:3001/movies/{id})
- Add one movie to the array: POST [http://localhost:3001/movies](http://localhost:3001/movies)
- Update one movie data: PUT [http://localhost:3001/movies/{id}](http://localhost:3001/movies/{id})
- Delete one movie: DELETE [http://localhost:3001/movies/{id}](http://localhost:3001/movies/{id})

You can find additional information in [Json Server](https://github.com/typicode/json-server)

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimices the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Additional packages and scripts

### Prettier

In order to have the code files properly formatted, the [Prettier](https://prettier.io) library has been added to the boilerplate.\
**All the tsx & ts files will be properly formatted before the commit**

### Husky and lint-staged

[Husky](https://typicode.github.io/husky/#/)\
[lint-staged](https://github.com/okonet/lint-staged)

The boilerplate uses these packages to add a pre-commit hook in order to pass the lint and format the files.\
`"*.{ts,tsx}": ["eslint", "prettier --write"]`

## Additional comments

We are using the lint config provide by [Create React App](https://github.com/facebook/create-react-app), no additional config or specific rules has been added.
