const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

function requestLogger(req, res, next) {
    const time = new Date().toLocaleTimeString();

    console.log(`[${time}] ${req.method} ${req.originalUrl}`);

    next();
}

app.use(requestLogger);

app.get("/", (req, res) => {
    res.send(`
        <h1>Express Middleware Demo</h1>
        <p>Request logging middleware is active.</p>
        <p>Open <a href="/students">/students</a> to view student data.</p>
    `);
});

app.get("/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Bhuvan",
            department: "CSE-AIML"
        },
        {
            id: 2,
            name: "Ananya",
            department: "CSE"
        },
        {
            id: 3,
            name: "Rahul",
            department: "IT"
        }
    ]);
});

app.get("/about", (req, res) => {
    res.json({
        application: "Express Middleware Demo",
        middleware: "Request Logger"
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Requested route does not exist."
    });
});

app.listen(PORT, () => {
    console.log(`Middleware server running at http://localhost:${PORT}`);
});