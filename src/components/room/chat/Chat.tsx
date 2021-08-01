import React from 'react'
import styled from 'styled-components'
import ChatContents from './ChatContents'
import ChatInput from './ChatInput'

const Chat: React.FC = () => {
    
    const ChatSection = styled.div`
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: #F3F6FA;
    `

    return(
        <ChatSection>
            <ChatContents></ChatContents>
            <ChatInput></ChatInput>
        </ChatSection>
    )
}

export default Chat