import React from 'react'
import '../Styling/SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
        <div className="searchPage-filter">
            <TuneOutlinedIcon/>
            <h2>Filter</h2>
            </div>
            <hr></hr>

            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
            Channel='Clever Programmer'
            verified
            subs="668K"
            noOfVideos={382}
            description="You can find awesome programming lessons here !.Also, expect programming tips and tricks that will take your coding skills to the next level.........."
            />
            <hr></hr>

            <VideoRow
             views="1.4M"
             subs="659K"
             description="Do you want a free one hour training...Check this out"
             timestamp="59 second ago"
             channel="Clever Programmer"
             title="🔴 Let's Build a Gmail Clone with ReactJS"
             image="http://i3.ytimg.com/vi/nHYbrCiN_ec/hqdefault.jpg" 

            />
            <VideoRow
            views="700k"
            subs="659K"
            description="Here is the best free React JS programming course on the planet. Take your web development skills to the next level "
            timestamp="5 months ago"
            channel="Clever Programmer"
            title="🔴 React JS Tutorial for Beginners in 12 Hours [2021]"
            image="http://i3.ytimg.com/vi/-cMqr9HpZ-Y/hqdefault.jpg" 

           />
           <VideoRow
           views="64k"
           subs="659K"
           description="In today's video, Sonny AKA papa React is BACK and he is building the highly anticipated DISCORD clone.  Let's go!!!"
           timestamp="5 months ago"
           channel="Clever Programmer"
           title="🔴 Build a Discord clone with REACT.JS for beginners! (With REDUX)"
           image="http://i3.ytimg.com/vi/zc1loX80TX8/hqdefault.jpg" 

          />
          <VideoRow
          views="1.6M"
          subs="659K"
          description="Here is the best free javascript programming course on the planet. Made with lots of ❤️. Take your web development skills to the next level with this Clever Programmer Learn Javascript course for beginners."
          timestamp="1 year ago"
          channel="Clever Programmer"
          title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
          image="http://i3.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg" 

         />
         <VideoRow
         views="269K"
         subs="659K"
         description="In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, INSTAGRAM CLONE using React, Firebase & Material-UI.."
         timestamp="8 months ago"
         channel="Clever Programmer"
         title="🔴 How to Build a Instagram Clone with REACT JS for Beginners (in 3 Hours!)"
         image="http://i3.ytimg.com/vi/f7T48W0cwXM/hqdefault.jpg" 

        />
        
        </div>
    )
}

export default SearchPage
