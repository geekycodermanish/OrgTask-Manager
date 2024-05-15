const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const organizationRoutes = require('./routes/organizationRoutes');
const taskRoutes = require('./routes/taskRoutes');
const bodyParser = require('body-parser');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/organizations', organizationRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
