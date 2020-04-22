import React from 'react'
import PropTypes from 'prop-types'

function Message (props) {
    return (
        <div className='message' title={props.info.created_at} onClick={() => {
            console.log(props.info)
        }}>
            <div className='message-sender'>{props.info.sender}:</div>
            <div className='message-body'>
                {props.info.text ? props.info.text + ' ' : ''}
                {props.info.link ? <a href={props.info.link}> {props.info.link + ' '} </a> : ''}
                {props.info.mentioned_username ? 'Mentioned ' + props.info.mentioned_username + ' ' : ''}
                {props.info.story_share ? props.info.story_share + ' ' : ''}
                {props.info.media ? <img className='media-display' src={props.info.media} alt='Sent a media'></img> : ''}
                {props.info.media_owner ? 'Media from ' + props.info.media_owner + ' ' : ''}
                {props.info.media_share_caption ? <p> {props.info.media_share_caption} </p> : ''}
                {props.info.media_share_url ? props.info.media_share_url + ' ' : ''}
                {props.info.action ? props.info.action + ' ' : ''}
                {props.info.profile_share_username ? 'Shared profile: Username: ' + props.info.profile_share_username + ' ' : ''}
                {props.info.profile_share_name ? 'Name: ' + props.info.profile_share_name + ' ' : ''}
                {props.info.voice_media ? 'Shared voice media: ' + props.info.voice_media + ' ' : ''}
            </div>
        </div>
    )
}

Message.propTypes = {
    info: PropTypes.object
}

export default Message
