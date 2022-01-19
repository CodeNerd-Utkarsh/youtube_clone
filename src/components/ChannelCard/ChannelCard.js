import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelCard.css'
import VerifiedIcon from '@mui/icons-material/Verified';
function ChannelCard({
    image,
    channelName,
    verified,
    subs,
    noOfVideos,
    description
}) {
    return (
        <div className="channelCard">
            <Avatar
                className="channelCard__logo"
                // alt={channelName}
                // src={image}
            />
            <div className="channelCard__text">
                <h4>
                    {channelName} {verified && <VerifiedIcon />}
                </h4>
                <p>
                    {subs} subscribers . {noOfVideos} videos
                </p>
            </div>
            
        </div>
    )
}

export default ChannelCard
