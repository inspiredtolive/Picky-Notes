module.exports = (db, Sequelize) => {
  const Room = db.define('room', {
    pathUrl: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    topic: Sequelize.TEXT,
    className: Sequelize.TEXT,
    lecturer: Sequelize.TEXT,
    audioUrl: {
      type: Sequelize.TEXT,
      defaultValue: 'audio url'
    },
    startTimestamp: {
      type: Sequelize.TEXT
    },
    timeLength: {
      type: Sequelize.TEXT,
      defaultValue: null
    }
  });

  return {
    Room: Room,
  };


};
