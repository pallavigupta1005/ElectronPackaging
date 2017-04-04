const electron = require('electron');
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;


var mainWindow = null;

app.on('ready', function(){
		mainWindow = new BrowserWindow({width: 800, height: 600});
		mainWindow.loadURL('https://github.com/');
		mainWindow.on('closed', function () { mainWindow = null; app.quit();})
});