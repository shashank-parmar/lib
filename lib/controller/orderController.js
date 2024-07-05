var db = require('../models/index')
const Order = db.Order; // Correct model name
const Student = db.Student; // Correct model name

exports.addOrders = async (req, res) => {
  try {
    const data = await Order.create({
      studentId: req.body.studentId,
      bookId: req.body.bookId,
    });
    res.status(201).json(data);
  } catch (error) {
    console.log('ERROR-ADD Orders', error);
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
}

exports.viewOrders = async (req, res) => {
  try {
    const data = await Order.findAll({
      include: [Student], // Correct association
    });
    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    console.log("ERROR-VIEW Orders", error);
    res.status(500).json({
      status: false,
      error: 'Internal server error',
      message: error,
    });
  }
}
