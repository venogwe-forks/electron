const { app} = require('electron');
const { BrowserWindow } = require('@electron/remote')

// Create the browser window.
function createWindow() {
    return new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {  
        enableRemoteModule: true,      /// <-- update this option
        nodeIntegration: true,
        contextIsolation: false,
        }
    });
}

const exitBtn = document.getElementById('exitBtn');

exitBtn.onclick = e => {
    console.log(remote);
    let w = remote.getCurrentWindow()
    w.close()
  
};