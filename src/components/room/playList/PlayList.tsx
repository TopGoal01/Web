import React from 'react'
import PlayItem from './PlayItem'
import styled from 'styled-components'

type PlayListProps = {
    height: number;
}

const PlayList: React.FC<PlayListProps> = ({height}) => {

    const PlayList = styled.div`
        height: ${height}px;
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