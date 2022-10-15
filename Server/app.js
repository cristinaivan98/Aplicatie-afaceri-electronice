import express, { application } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
const app=express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
const CONNECTION_URL='mongodb://cristina:user123@cluster0-shard-00-00.rs0x1.mongodb.net:27017,cluster0-shard-00-01.rs0x1.mongodb.net:27017,cluster0-shard-00-02.rs0x1.mongodb.net:27017/proiectMaster?ssl=true&replicaSet=atlas-dhkzzx-shard-0&authSource=admin&retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5001;
import rutaPosts from './routes/posts.js'
app.use('/posts',rutaPosts);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () =>
   console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));