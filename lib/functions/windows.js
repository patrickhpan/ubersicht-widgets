const getWindows = () => {
  const parse = body => body.split("\n").map(x => x.trim()).filter(x => x.match(/,.*,/))
    .map(x => {
      const { 1: id, 2: owner, 3: title } = x.match(/^([^,]*),([^,]*),(.*)$/)
      return {
        id: id.trim(),
        owner: owner.trim(),
        title: title.trim() 
      }
    })
    
  const exec = cmd => require('child_process').execSync(cmd, { encoding: 'utf8' })
  const active = exec('chunkc tiling::query --window id').trim()
  const windows = parse(exec('chunkc tiling::query --desktop windows'))
  return windows.map(({ id, owner, title }) => {
    return {
      id, owner, title, 
      isActive: id.trim() === active
    }
  }).filter(window => window.title !== "(invalid)").sort((a, b) => a.id - b.id)
}

module.exports = {
  getWindows
}
