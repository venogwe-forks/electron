const electronLocalshortcut = require('electron-localshortcut');

function registerShortcut(shortcuts) {
  return (win) => Object.entries(shortcuts)
    .map(([shortcut, message]) => electronLocalshortcut
    .register(win, shortcut, () => console.log(message)))
}

module.exports = { registerShortcut }
