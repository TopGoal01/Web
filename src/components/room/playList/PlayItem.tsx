import React from 'react'
import styled from 'styled-components'

const PlayItem: React.FC = () => {

    const PlayItem =  styled.div `
        height: 100%;
        width: 400px;
        display: inline-flex;
        margin-right: 10px;
        background-color: #202020;
        align-items: center;
    `

    const ThumbNailImg = styled.img`
        display: inline-block;
        height: 100%;
    `

    const ItemInfo = styled.div`
        color: white;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    `


    return(
        <PlayItem>
            <ThumbNailImg src="http://img.youtube.com/vi/51boqGNfH_8/mqdefault.jpg"/>
            <ItemInfo>
                <div>
                    부자되는 법
                </div>
                <div>
                    3분 26초                
                </div>
            </ItemInfo>
        </PlayItem>
    )
}

export default PlayItem