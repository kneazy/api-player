const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 512,
    height: 430,
    minWidth: 512,
    minHeight: 430,
    'webPreferences': {
      'webSecurity': false,
      'nodeIntegration': false
    }
  });
  // mainWindow.loadURL('http://localhost:3000');
  // mainWindow.on('closed', () => mainWindow = null);
  // mainWindow.webContents.openDevTools();
  const startUrl = process.env.ELECTRON_START_URL || url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true
  });
  mainWindow.loadURL(startUrl);
  // let menu = Menu.buildFromTemplate([
  //   {
  //       label:'Categories',
  //       click() { 
  //         mainWindow.loadURL('/categories')
  //       } 
  //   },
  //   {
  //       label:'Exit', 
  //       click() { 
  //           app.quit() 
  //       } 
  //   }
  // ])
  // Menu.setApplicationMenu(menu); 
  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});