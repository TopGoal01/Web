import React from 'react';
import Header from '@/components/room/Header'
import Video from '@/components/room/Video'
import PlayList from '@/components/room/PlayList'
import Chat from '@/components/room/Chat'

import styled from "styled-components"
import { Row, Col } from 'antd';

const Room: React.FC = () => {

    return (
        <div>
            <Header/>
            <Row>
                <Col span={16}>
                    <Video/>
                    <PlayList/>
                </Col>
                <Col span={8}>
                    <Chat/>
                </Col>
            </Row>
        </div>
    )
}

export default Room;