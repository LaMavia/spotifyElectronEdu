const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const http = require('http')
const fs = require('fs')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600, autoHideMenuBar: true, show: false})

  // and load the index.html of the app.
  /*From loadURL
  url.format({
    pathname: path.join(__dirname, '/app/index.html'),
    protocol: 'file:',
    slashes: true
  })*/
  fs.readFile(`${__dirname}/app/index.html`, function(err, html){
    if(err) throw err;
    http.createServer(function(req, res){
      res.writeHead(200);
      res.write(html);
      res.end();
    }).listen(8080);
  })
  win.loadURL('http://localhost:8080/');
  win.maximize();
  win.show();

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}
app.on('ready', function(){
  createWindow();
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})