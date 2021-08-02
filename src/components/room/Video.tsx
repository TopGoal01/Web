import React from 'react'
import YouTube from "react-youtube";
import styled from 'styled-components';

const Video: React.FC = () => {

    const opts = {
        width: "100%",
        height: "700px",
        playerVars: {
          autoplay: undefined,
        },
      };
    
    const videoId = '51boqGNfH_8'

    return(
        <div>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    )
}

export default Video