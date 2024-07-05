const db = require('../models');
const Student = db.Student; // Ensure correct model name

exports.addStudents = async (req, res) => {
  try {
    const data = await Student.create({ // Correct method name
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      contact: req.body.contact,
      course: req.body.course,
      semester: req.body.semester,
      subject: req.body.subject,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
    });
    res.status(201).json(data); // Use a proper status code for creation
  } catch (error) {
    console.log('ERROR-ADD STUDENT', error);
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
}

exports.viewStudents = async (req, res) => {
  try {
    const data = await Student.findAll({});
    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    console.log("ERROR-VIEW STUDENT", error);
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
}
