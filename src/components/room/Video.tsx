import React, { useEffect, useState } from 'react'
import YouTube from "react-youtube";
import styled from 'styled-components';

declare global {
    interface Window {
      YT: any;
    }
  }

type VideoProps = {
    playListHeight: number;
}

const Video: React.FC<VideoProps> = ({playListHeight}) => {

    const [ player, setPlayer ] = useState()
    const [ done, setDone ] = useState(false)

    useEffect(() => {
        onYouTubeIframeAPIReady()
    }, [])

    const onYouTubeIframeAPIReady = () => {
        setPlayer(new window.YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
        }))
    }

    const onPlayerReady = (event: any) => {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
    const onPlayerStateChange = (event: any) => {
        if (event.data == window.YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          setDone(true);
        }
      }

    const stopVideo = () => {
        console.log("stop")
        // if(player) player?.stopVideo();
    }
    
    const videoId = '51boqGNfH_8'

    const playerStyle = {
        width: '100%',
        height: `calc(100% - ${playListHeight}px)`
    }

    return(
        <div id="player" style={playerStyle}></div>
        // <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oqapAA7o-sc"/>
        // <YouTube videoId={videoId} opts={opts} />
    )
}

export default Video