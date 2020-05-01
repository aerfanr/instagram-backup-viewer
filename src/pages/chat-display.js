import React, { useEffect, useState } from 'react'

import Message from './chat-display/message'

const { ipcRenderer } = window.require('electron')

function ChatDisplay () {
    const [data, setData] = useState({
        conversation: []
    })

    useEffect(() => {
        const temp = ipcRenderer.sendSync('reciever-ready')
        temp.conversation = temp.conversation.slice().reverse()
        setData(temp)
    }, [])

    return ([
        <h1 key='title'>Direct chat</h1>,
        data.conversation.map((value, index) => {
            return (
                <Message key={index} info={value}/>
            )
        })
    ])
}

export default ChatDisplay
