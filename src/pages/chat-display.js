import React, { useEffect } from 'react'

const { ipcRenderer } = window.require('electron')

function ChatDisplay () {
    useEffect(() => {
        console.log(ipcRenderer.sendSync('reciever-ready'))
    }, [])

    return (
        <h1>Chat Display</h1>
    )
}

export default ChatDisplay
