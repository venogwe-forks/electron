const { BrowserWindow } =  require('electron')
const { join } = require('path')
const { interProcessCom } = require('./ipc')

module.hot = {}

function main() {
  const browserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    frame: false,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
      preload: join(__dirname, 'preload.js')
    }
  })

  browserWindow.maximize();
  browserWindow.setMenu(null)
  browserWindow.loadFile(join(__dirname, 'index.html'))
  browserWindow.webContents.once('dom-ready', interProcessCom)

  if (module.hot) browserWindow.webContents.openDevTools()

  return browserWindow
}


module.exports = { main }
