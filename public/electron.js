const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let isDev = false
try {
    isDev = require('electron-is-dev')
} catch (error) {
    isDev = false
}

const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`

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
    // mainWin.webContents.openDevTools()
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

    ipcMain.once('reciever-ready', event => {
        event.returnValue = data
    })

    // dev tools
    // recieverWin.webContents.openDevTools()
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
