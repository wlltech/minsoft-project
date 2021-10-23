require('dotenv').config();
const chalk = require('chalk');
const express = require('express');
const cors = require('cors');

require('./drivers/mongo-connection');

// const tasksRouter = require('./routes/tasks-routes');
// const usersRouter = require('./routes/users-routes');

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

// routes // controllers // models

// app.use('/api/tasks', tasksRouter);
// app.use('/api/users', usersRouter);

// app.get('*', (request, response) => {
//   return response.send('Not found!');
// });
async function main(){
    await app.listen(port);
    console.log(chalk.green(`El servidor está listo en el puerto: ${port}!`))


}
main()
