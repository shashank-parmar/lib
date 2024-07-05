var db = require('../models/index')
const Books = db.Book
exports.addBook = async (req, res) => {
  try {
    const data = await Books.create({ // Correct method name
      book_name: req.body.book_name,
      book_category: req.body.book_category,
      book_price: req.body.book_price,
      
    });
    res.status(201).json(data);
  } catch (error) {
    console.log('ERROR-ADD Books', error)
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}

exports.viewBook = async (req, res) => {
  try {
    const data = await Books.findAll({})
    res.status(200).json({
      status: true,
      data: data
    })
  } catch (error) {
    console.log("ERROR-VIEW Books", error);
  }
}