import React from 'react'
import PropTypes from 'prop-types'

const { ipcRenderer } = window.require('electron')

function ChatEntry (props) {
    const participants = props.data.participants
    let titleString = ''

    let i = 0
    for (const participant of participants) {
        titleString += participant
        if (i < participants.length - 2) {
            titleString += ', '
        } else if (i === participants.length - 2) {
            titleString += ' and '
        }
        i++
    }

    return (
        <div className='menu-option' onClick={() => {
            showChatWin(props.data)
        }}>
            {titleString}
        </div>
    )
}

function showChatWin (data) {
    ipcRenderer.sendSync('chat-display-request', data)
}

ChatEntry.propTypes = {
    data: PropTypes.object
}

export default ChatEntry
