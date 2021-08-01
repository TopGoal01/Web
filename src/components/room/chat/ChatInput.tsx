import React from 'react'
import styled from 'styled-components'
import {
    SendOutlined,
  } from '@ant-design/icons';
const ChatInput: React.FC = () => {

    const iconSize = 40

    const ChatInput = styled.div`
        height: 50px;
        background-color: #FFFFFF;
        border-radius: 10px;
        margin: 0px 20px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.16), 0 1px 6px rgba(0,0,0,0.23);
    `
    
    const Input = styled.input`
        background-color: transparent;
        width: calc(100% - ${iconSize}px);
        height: 100%;
        border: none;
        text-indent: 10px;
        &:focus {
            outline: none;
        }
    `

    const ChatSubmitBtn = styled(SendOutlined)`
        width: ${iconSize}px;
        cursor: pointer;
        color: ${props => props.theme.purple}
    `

    return(
        <ChatInput>
            <Input/>
            <ChatSubmitBtn/>
        </ChatInput>
    )
}

export default ChatInput