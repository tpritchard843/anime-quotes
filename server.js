const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const flash = require('express-flash');
const logger = require('morgan');
const userRoutes = require('./routes/users');

const PORT = process.env.PORT || 8000;

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(logger('dev'));

app.get('/api', (req,res) => {
  res.json({message: "Hello from the server"});
})

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
