import React from 'react'
import '../Styling/ChannelRow.css';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import {Avatar} from '@material-ui/core';

function ChannelRow({image,Channel,verified,subs,noOfVideos,description,}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow-logo"
            alt={Channel} src={image}
            />
            <div className="channelRow-text">
              <h4>
              {Channel}{verified && <VerifiedIcon/>}
              </h4>
              <p>
              {subs} subscribers * {noOfVideos} videos
              </p>
              <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
