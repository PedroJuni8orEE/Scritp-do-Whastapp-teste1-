const express = require('express');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenseRoutes');
const WhatsAppService = require('./services/whatsappService');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize WhatsApp Service
const whatsappService = new WhatsAppService();

// Set up routes
app.use('/api/expenses', expenseRoutes(whatsappService));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});