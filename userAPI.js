import { default as app } from "./app";


const userModule = new UserModule();

// Create a user
app.post('/users', (req, res) => {
  const newUser = req.body;
  const createdUser = userModule.createUser(newUser);
  res.json(createdUser);
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = userModule.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = req.body;
  const user = userModule.updateUser(userId, updatedUser);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const deletedUser = userModule.deleteUser(userId);
  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

export default app;
