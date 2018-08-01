command: "/usr/local/bin/node ./lib/output.js",

refreshFrequency: 1000 / 60 * 10,

render: function (output) {
  const { spotify, windows, time } = JSON.parse(output);
  let html = "";
  html += `<div class="taskbar">`;

  html += `<div class="left">`;
    html += `<img class="spotify-img" src=${spotify.artwork_url}>`
    html += `</img>`
    html += `<div class="spotify-info">`
      html += `<div class="spotify-track-name">`
        html += spotify.artist ? spotify.artist + ": " : "";
        html += spotify.name;
      html += `</div>`;
      widthPercent = Math.floor(spotify.position / spotify.duration * 1000 * 100 * 2) / 2
      html += `<div class="spotify-bar" style="background:linear-gradient(to right, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) ${widthPercent-1}%,rgba(255,255,255,0) ${widthPercent+1}%,rgba(255,255,255,0) 100%)">`
      html += `</div>`;
    html += `</div>`;
  html += `</div>`;

  html += `<div class="center">`;
  windows.forEach(({ id, owner, isActive }) => {
    const className = isActive ? 'window active' : 'window'
    html += `<div class="${className}">${owner}</div>`
  })
  html += `</div>`;

  html += `<div class="right">`;
  html += `<div class="time">${time}</div>`
  html += `</div>`;

  html += `</div>`;
  return html;
},

style: `
.taskbar {
  color: white;
  font-size: 18px;
  position: fixed;
  height: 4em;
  margin-top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  font-family: Avenir Next;
  background-color: rgba(0,0,0,0.5);
}
.left { 
  flex: 1;
  display: flex;
  align-items: stretch;
  padding: 0.5em 1em;
}
.center { 
  flex: 2;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0.5em 1em;
}
.right { 
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  padding: 0.5em 1em;
}
.window {
  cursor: pointer;
  padding-left: 3em;
  padding-right: 3em;
  margin: 0.25em 2em;
  olor: white;
  border-bottom: 1px solid transparent;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.active {
  background-color: rgba(255,255,255,0.3);
  border-radius: 0.25em;
}
.time{
  color: white;
  display: flex;
  align-items: center;
}
.spotify-img {
  height: 2.5em;
  width: 2.5em;
  margin-right: 1em;
  align-self: center;
}
.spotify-info {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}
.spotify-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: auto;
  height: 1px;
  width: 100%;
}
`
