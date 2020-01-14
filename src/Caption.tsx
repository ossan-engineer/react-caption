import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  color?: string;
  outlineColor?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  fontSize?: number;
  chilren?: ReactNode;
};

const Caption: React.FC<Props> = ({
  color = '#fff',
  outlineColor = '#000',
  fontFamily = '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif',
  fontSize = 16,
  fontWeight = 'normal',
  children,
}) => {
  return (
    <Wrapper
      color={color}
      outlineColor={outlineColor}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  color: ${({ color }) => color};
  text-shadow: ${({ outlineColor }) =>
    `1px 1px 0 ${outlineColor}, -1px -1px 0 ${outlineColor}, -1px 1px 0 ${outlineColor}, 1px -1px 0 ${outlineColor}, 0px 1px 0 ${outlineColor}, 0 -1px 0 ${outlineColor}, -1px 0 0 ${outlineColor}, 1px 0 0 ${outlineColor}`};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default Caption;
