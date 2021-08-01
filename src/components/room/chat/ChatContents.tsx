import React from 'react'
import styled from 'styled-components'
import ChatBubble from './ChatBubble'

const ChatContents: React.FC = () => {
    const ChatContents = styled.div`
        height: calc(100% - 70px);
        overflow: scroll;
    `

    return(
        <ChatContents>
            <ChatBubble/>
            <ChatBubble/>
            <ChatBubble/>
            <ChatBubble/>
            <ChatBubble/>
            <ChatBubble/>
            <ChatBubble/>
            <ChatBubble/>
            <ChatBubble/>
            <ChatBubble/>
            <ChatBubble/>
            <ChatBubble/>

        </ChatContents>
    )
}

export default ChatContents