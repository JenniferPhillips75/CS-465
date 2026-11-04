
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

// Configure Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, 'app_server', 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'app_server', 'views', 'partials')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Serve static website files
app.use(express.static(path.join(__dirname, 'public')));

// Register routes
app.use('/', require('./app_server/routes/index'));
app.use('/', require('./app_server/routes/trvl'));

// Start server
const port = 3000;

app.listen(port, () => {
    console.log(`Travlr Getaways app listening at http://localhost:${port}`);
});
