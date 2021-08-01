import React from "react";
import styled from 'styled-components'

type HeaderProps = {
    height: number;
}

const Header: React.FC<HeaderProps> = ({height}) => {

    const Header = styled.div`
        height: ${height}px
    `
    return(
       <Header>
           헤더123
       </Header> 
    )
}

export default Header