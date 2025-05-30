# Course_List

An online learning website project using Node.js, Express.js, and MongoDB.

## Requirements

- Node.js >= 14
- MongoDB installed and running at `mongodb://localhost:27017/f8_education_dev`

## Installation

1. Install required packages:

```sh
cd blog
npm install
```

2. Run the SCSS to CSS compiler (in a separate terminal):

```sh
npm run watch
```

3. Start the server:

```sh
npm start
```

4. Access the website at [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm start`: Run the server with nodemon (auto reload on code changes)
- `npm run watch`: Automatically compile SCSS to CSS
- `npm run beautiful`: Format source code with Prettier

## Folder Structure

- `src/`: Main source code
- `src/app/controllers/`: Route controllers
- `src/app/models/`: MongoDB models
- `src/routes/`: Route definitions
- `src/resources/views/`: Handlebars templates
- `src/public/`: Static assets (CSS, images, etc.)
