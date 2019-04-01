import React from 'react';
import Div from './styled/Div'
import { Span } from './styled/Span'

const TopBar = () => {
  return (
    <Div topBar>
      <Div container>
        <Div containerLeft>
          <Span topBarLeft>TOPICS</Span><Span topBarLeft>SEARCH</Span>
        </Div>
        <Div containerCenter>
          <Span topBarCenter>GENERAL</Span><Span topBarCenter>BROWNBAG</Span><Span topBarCenter>RANDOM</Span><Span topBarCenter>MUSIC</Span><Span topBarCenter>ANNOUNCEMENTS</Span>
        </Div>
        <Div containerRight>
          <Span>LOG IN</Span>
        </Div>
      </Div>
    </Div>
  )
}

export default TopBar;