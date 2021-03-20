import React from 'react'
import '../Styling/VideoCard.css';
import Avatar from '@material-ui/core/Avatar';
function VideoCard({image,title,channel,views,timestamp,channelImage}) {

    return (
        <div className="videoCard">
            <img src={image} className="videoCard-thumbnail" alt=""></img>
            <div className="videoCard-info">
              <Avatar className="videoCard-avatar" alt={channel}
              src={channelImage}
              />
              <div className="video-text">
               <h4>{title}</h4>
               <p>{channel}</p>
               <p>
                {views} * {timestamp}
               </p>
              </div>
            </div> 
        </div>
    )
}
 
export default VideoCard
