const { getHourMinute, getWindows, getTrack } = require('./functions')

getTrack(data => {
  process.stdout.write(JSON.stringify({
    time: getHourMinute(),
    windows: getWindows(),
    spotify: data
  }))
})
