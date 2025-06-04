const express = require('express');
const app = express();
const prisma = require('./prisma/client');
const userRoutes = require('./src/routes/userRouts');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRoutes);

app.get('/', async (req, res) => {
  const result = await prisma.users.findMany();
  res.json(result);
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
