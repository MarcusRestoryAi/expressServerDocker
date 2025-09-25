const express = require('express');
const app = express();
const PORT = 8080;

// Simple GET endpoint
app.get('/', (req, res) => {
  res.send('Hello from Express server on port 8080, AWS Edition!');
});

// Listen method for startup
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
