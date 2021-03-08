//import { app, BrowserWindow } from 'electron'; 
const { app, BrowserWindow } = require('electron')

if(process.env.NODE_ENV !== 'production'){
        require('electron-reload')(__dirname,{
            //electron: path.join(__dirname,'../../node_modules','.bin','electron')
    })
}

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
