const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is valid (e.g., a number, exists in the database)
  if (!isValidUserId(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... (fetch user data and send response)
});

function isValidUserId(userId) {
  // Add your validation logic here
  return typeof userId === 'string' && /^[0-9]+$/.test(userId);
}
