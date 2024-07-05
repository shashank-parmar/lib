module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    contact: {
      type: DataTypes.INTEGER
    },
    course: {
      type: DataTypes.STRING
    },
    semester: {
      type: DataTypes.STRING
    },
    subject: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
  });
  Student.sync({ force: false })

  Student.associate = (models) => {
    Student.hasMany(models.Order, {
      foreignKey: "studentId",
      as: 'orders'
    });
    Student.hasMany(models.Librarian, {
      foreignKey: "studentId",
      as: 'librarians'  
    });
  }

  return Student;
};
