
const { app } =  require('electron')
const { main } = require('./main')
const { registerShortcut } =  require('./shortcuts')
const { SHORTCUTS } = require('./constants')
const { debugApp } = require('./debug')

if (app) {
  if(require('electron-squirrel-startup')) app.quit();
  app.on('activate', () => BrowserWindow.getAllWindows().length === 0 ? main() : void 0)
  app.on('window-all-closed', () => process.platform !== 'darwin' ? app.quit() : void 0)
  app.whenReady()
    .then(main)
    .then(registerShortcut(SHORTCUTS))
    .then(debugApp)
    .catch(error => console.log(error.message))
}
