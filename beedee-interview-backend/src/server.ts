import express from "express";
import bodyParser from "body-parser";
import todoRoutes from './routes/todoRoutes';

const app = express();
const PORT = 3005;

app.use(bodyParser.json());

app.use('/todo', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
