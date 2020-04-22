import React from 'react'
import PropTypes from 'prop-types'

function Message (props) {
    console.log(props.info)
    return (
        <div className='message' title={props.info.created_at}>
            <div className='message-sender'>{props.info.sender}:</div>
            <div className='message-body'>
                {props.info.text ? props.info.text + ' ' : ''}
                {props.info.mentioned_username ? 'Mentioned ' + props.info.mentioned_username + ' ' : ''}
                {props.info.story_share ? props.info.story_share + ' ' : ''}
            </div>
        </div>
    )
}

Message.propTypes = {
    info: PropTypes.object
}

export default Message
