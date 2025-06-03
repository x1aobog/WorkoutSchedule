const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route example
app.get('/api/workouts', (req, res) => {
    res.json({
        message: 'Workout Schedule API',
        workouts: [
            { id: 1, name: 'Morning Run', time: '07:00' },
            { id: 2, name: 'Gym Session', time: '18:00' }
        ]
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});