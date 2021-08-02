import React from 'react'
import styled from 'styled-components'


const PlayItem: React.FC = () => {

    const PlayItem =  styled.span`
        height: 100%;
        width: 300px;
        border: 1px solid black;
        border-radius: 20px;
        display: inline-block;
        white-space: nowrap;
        margin-right: 10px;
    `

    return(
        <PlayItem>
            플레이 아이템
        </PlayItem>
    )
}

export default PlayItem