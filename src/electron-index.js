const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

function createMainWindow () {
    const mainWin = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    })

    const startURL = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file',
        slashes: true
    })

    mainWin.loadURL(startURL)

    // dev tools
    mainWin.webContents.openDevTools()
}

app.whenReady().then(createMainWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// Darwin only

app.on('activate', () => {
    createMainWindow()
})
