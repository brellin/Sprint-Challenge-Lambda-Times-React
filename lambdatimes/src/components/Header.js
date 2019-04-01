import React from 'react';
import Div from './styled/Div';
import { Span, H1 } from './styled/Span';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Div header>
      <Span date>MARCH 32, 2018</Span>
      <H1>Lambda Times</H1>
      <Span temp>98°</Span>
    </Div>
  )
}

export default Header