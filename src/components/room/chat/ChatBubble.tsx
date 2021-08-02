import React from 'react'
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'


const ChatBubble: React.FC = () => {
    const ChatBubble = styled.div`
        padding: 20px 20px 0px 20px;
        display: flex;
    `

    const UserIcon = styled(UserOutlined)`
        font-size: 20px;
        min-width: 40px;
        min-height: 40px;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    const BubbleContent = styled.div`
        margin-left: 20px;
    `
    const UserName = styled.span`
        color: #727272;
        margin-right: 10px;
    `
    
    const BubbleTime = styled.div`
        margin-top: 5px;
        font-size: 10px;
        color: #727272;
    `

    return(
        <ChatBubble>
            <UserIcon/>
            <BubbleContent>
                <UserName>신승민</UserName>
                <span>채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요채팅칠게요</span>
                <BubbleTime>11:12:12 AM</BubbleTime>
            </BubbleContent>
        </ChatBubble>
    )
}

export default ChatBubble