const express = require('express');
const path = require('path');
const app = express();

// ✅ Use Railway or hosting environment's port, fallback to 8080 for local dev
const PORT = process.env.PORT || 8080;

// Middleware to serve static files
app.use('/styles', express.static(path.join(__dirname, 'public/styles')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/scripts', express.static(path.join(__dirname, 'public/scripts')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve HTML files from views
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Optional routes for other pages (if they exist)
app.get('/mens.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/mens.html'));
});

app.get('/women.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/women.html'));
});

app.get('/kids.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/kids.html'));
});

app.get('/newlaunch.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/newlaunch.html'));
});

app.get('/people.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/people.html'));
})

app.get('/work.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/work.html'));
})

app.get('/collections.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/collections.html'));
})

app.get('/blog.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/blog.html'));
})

app.get('/careers.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/careers.html'));
})


app.get('/checkout.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/checkout.html'));
});

app.get('/signin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/signin.html'));
});

app.get('/cart.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/cart.html'));
});

// Catch-all fallback
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




