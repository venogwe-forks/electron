const { ipcMain } = require("electron");

function interProcessCom(event) {
  const app = event.sender

  ipcMain.on('exit-app',(_, message) => app.quit());
}

module.exports = { interProcessCom }
