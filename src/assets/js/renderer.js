window.$ = window.jQuery = require('jquery'); // not sure if you need this at all
window.Bootstrap = require('bootstrap');

const { ipcRenderer } = require('electron')

function onExit(event$) {
  ipcRenderer.sendSync('exit-app', 'exit')
}

function render() {
  const exitBtn = document.getElementById('exitBtn');

  exitBtn.addEventListener('click', onExit)
}

render()
