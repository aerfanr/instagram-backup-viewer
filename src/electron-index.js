const { app, BrowserWindow, ipcMain } = require('electron')
const url = require('url')
const path = require('path')

const startURL = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file',
    slashes: true
})

function createMainWindow () {
    const mainWin = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWin.loadURL(startURL)

    // dev tools
    mainWin.webContents.openDevTools()
}

function createRecieverWindow (pageURL, data) {
    const recieverWin = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    })

    recieverWin.loadURL(pageURL)

    ipcMain.on('reciever-ready', event => {
        event.returnValue = data
    })

    // dev tools
    recieverWin.webContents.openDevTools()
}

app.whenReady().then(createMainWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

ipcMain.on('chat-display-request', (event, data) => {
    createRecieverWindow(startURL + '/chat-display', data)
    event.returnValue = 'done'
})

// Darwin only

app.on('activate', () => {
    createMainWindow()
})
