import express from "express";
import mongoose from "mongoose";
import routes from './routes';

require('dotenv').config({ path: "app/.env" });

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.error("Connect fail! " + err));

const app = express();

//excepts data in json format
app.use(express.json());


app.use('/v1',routes);

app.get('/', (req, res) => {
  res.send('Hello world');
});


app.listen(3000, () => console.log('server is running at port 3000'));