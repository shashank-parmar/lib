const express = require('express')
const app = express();
const PORT = 8080;

require('./models/index')
const { addStudents, viewStudents } = require('./controller/studentController.js');
const { addBook, viewBook } = require('./controller/bookController.js');
const { addOrders, viewOrders } = require('./controller/orderController.js');
app.get('/', (req, res) => {
  res.send('getted');
});
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.post('/add-student', addStudents);
app.get('/view-student', viewStudents);
app.post('/add-book', addBook);
app.get('/view-book', viewBook);
app.post('/add-order', addOrders);
app.get('/view-order', viewOrders);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
