function preload() {
  document.getElementById('chrome-version')?.setAttribute('data-content', process.versions.chrome)
  document.getElementById('electron-version')?.setAttribute('data-content', process.versions.electron)
  document.getElementById('node-version')?.setAttribute('data-content', process.versions.node)
}


preload()
