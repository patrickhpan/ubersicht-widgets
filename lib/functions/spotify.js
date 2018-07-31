const spotify = require('spotify-node-applescript');
const getTrack = cb => spotify.getTrack((err, data) => {
  if (err) {
    return cb(null)
  }
  const { duration, artist, name, artwork_url } = data;
  spotify.getState((err, state) => {
    let position = duration; 
    if(!err) {
      position = state.position 
    }
    cb({ duration, position, artist, name, artwork_url });
  })
})

module.exports = { 
  getTrack
}
