import React from 'react'
import PlayItem from './PlayItem'
import styled from 'styled-components'


const PlayList: React.FC = () => {

    const PlayList = styled.div`
        height: 160px;
        background-color: gray;
        white-space: nowrap;
        overflow: scroll;
    `

    return(
        <PlayList>
            <PlayItem/>
            <PlayItem/>
            <PlayItem/>
            <PlayItem/>
            <PlayItem/>
            <PlayItem/>
            <PlayItem/>
            <PlayItem/>
            <PlayItem/>
            <PlayItem/>
        </PlayList>
    )
}

export default PlayList