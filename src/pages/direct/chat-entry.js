import React from 'react'
import PropTypes from 'prop-types'

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
        <div className='chat-entry'>
            {titleString}
        </div>
    )
}

ChatEntry.propTypes = {
    data: PropTypes.object
}

export default ChatEntry
