import React from 'react';
import Header from '@/components/room/Header'
import Video from '@/components/room/Video'
import PlayList from '@/components/room/PlayList'
import Chat from '@/components/room/chat/Chat'
import styled from "styled-components"
import { Row, Col } from 'antd';

const Room: React.FC = () => {
    const headerHeight = 40

    const Room = styled.div`
        height: 100%;
    `

    const CustomRow = styled(Row)`
        height: calc(100% - ${headerHeight}px);

    `

    const CustomCol = styled(Col)`
        padding: 20px;
        height: 100%;
    `

    return (
        <Room>
            <Header height={headerHeight}/>
            <CustomRow>
                <Col span={16}>
                    <Video/>
                    <PlayList/>
                </Col>
                <CustomCol span={8}>
                    <Chat/>
                </CustomCol>
            </CustomRow>
        </Room>
    )
}

export default Room;