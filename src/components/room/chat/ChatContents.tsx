import React from 'react'
import styled from 'styled-components'

const ChatContents: React.FC = () => {
    const ChatContents = styled.div`
        height: calc(100% - 70px);   
    `

    return(
        <ChatContents>
            채팅 내용
        </ChatContents>
    )
}

export default ChatContents