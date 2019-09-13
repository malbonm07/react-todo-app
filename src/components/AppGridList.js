import React from 'react';
import styled from 'styled-components';

function AppCard() {
    return(
        <li>

        </li>
    )
}

const li = styled.li`
    width: 100%;
    min-height: calc(100vh - 170px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 5px;
    /* grid-auto-flow: dense; */
`

export default AppCard;