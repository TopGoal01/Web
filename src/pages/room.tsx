import React from 'react';
import Header from '@/components/room/Header'
import Video from '@/components/room/Video'
import PlayList from '@/components/room/playList/PlayList'
import Chat from '@/components/room/chat/Chat'
import styled from "styled-components"
import { Row, Col } from 'antd';

const Room: React.FC = () => {
    const headerHeight = 80
    const playListHeight = 120

    const Room = styled.div`
        height: 100%;
        padding: 20px;
    `

    const CustomRow = styled(Row)`
        height: calc(100% - ${headerHeight}px);

    `

    const CustomCol = styled(Col)`
        padding-left: 20px;
        height: 100%;
    `


    return (
        <Room>
            <Header height={headerHeight}/>
            <CustomRow>
                <Col span={18}>
                    <Video playListHeight={playListHeight}/>
                    <PlayList height={playListHeight}/>
                </Col>
                <CustomCol span={6}>
                    <Chat/>
                </CustomCol>
            </CustomRow>
        </Room>
    )
}

export default Room;