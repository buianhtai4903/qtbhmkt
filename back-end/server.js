const express = require('express');
const app = express();
const prisma = require('./prisma/client');
const userRoutes = require('./src/routes/userRouts');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // nếu frontend gửi cookie
}));



app.use('/user', userRoutes);

app.get('/', async (req, res) => {
  const result = await prisma.users.findMany();
  res.json(result);
});



app.listen(7000, () => {
  console.log('Server is running on port 7000');
});
