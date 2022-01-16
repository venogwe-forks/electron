require("@electron/remote/main").initialize() 
const { app, ipcMain } = require("electron");

const path = require('path');
const electronLocalshortcut = require('electron-localshortcut');
const exec = require('child_process').exec;


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

// function execute(command, callback) {
//   exec(command, (error, stdout, stderr) => { 
//       callback(stdout); 
//   });
// };




function winOptions(win) {
  win.maximize();
  win.setMenu(null) 
  // and load the index.html of the app.
  win.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  win.webContents.openDevTools();
}

function registerShortcuts(win) {
  electronLocalshortcut.register(win, 'Ctrl+W', () => {
    console.log('You pressed ctrl & W');
    return false;
  });
  
  electronLocalshortcut.register(win, 'Alt+Tab', () => {
    console.log('You pressed alt & Tab');
    return false;
  });
  
  electronLocalshortcut.register(win, ['Ctrl+R', 'F5'], () => {
    console.log('You pressed ctrl & R or F5');
  });

  console.log(
    electronLocalshortcut.isRegistered(win, 'Ctrl+A')
  );      // true
  
  execute('ping 8.8.8.8', (output) => {
    console.log(output);
  });
}



// electronLocalshortcut.unregister(win, 'Ctrl+A');
// electronLocalshortcut.unregisterAll(win);

ipcMain.on("btnclick",function (event, arg) {
 app.quit();  
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady()
  .then(createWindow)
  .then(winOptions)
  .then(registerShortcuts)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
