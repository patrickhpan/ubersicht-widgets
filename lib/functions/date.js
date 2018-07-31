const format = require('date-format');
const getHourMinute = () => {
  return format("hh:mm", new Date())
}

module.exports = {
  getHourMinute
}

