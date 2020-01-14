import React from 'react';
import styled from 'styled-components';

import Caption from '../Caption';

export default {
  title: 'Caption',
  component: Caption,
};

const images = {
  sky: '/air-atmosphere-blue-bright-436383.jpg',
  forest: '/nature-forest-trees-fog-4827.jpg',
  city: '/raised-building-frame-169647.jpg',
};

const Wrapper = styled.div`
  padding: 50px;
  background: ${({ backgroundImage }) =>
    `url(${backgroundImage}) no-repeat left bottom`};
  background-size: cover;
`;

export const English = () => (
  <>
    <Wrapper backgroundImage={images.sky}>
      <Caption>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Caption>
    </Wrapper>
    <Wrapper backgroundImage={images.forest}>
      <Caption>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Caption>
    </Wrapper>
    <Wrapper backgroundImage={images.city}>
      <Caption>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Caption>
    </Wrapper>
  </>
);

export const Japanese = () => (
  <>
    <Wrapper backgroundImage={images.sky}>
      <Caption>
        寿限無　寿限無　五劫のすりきれ 海砂利水魚の水行末　雲来末　風来末
        食う寝るところに住むところ やぶら小路のぶら小路
        パイポパイポ　パイポのシューリンガン シューリンガンのクーリンダイ
        クーリンダイのポンポコナーのポンポコピーの 長久命の長助
      </Caption>
    </Wrapper>
    <Wrapper backgroundImage={images.forest}>
      <Caption>
        寿限無　寿限無　五劫のすりきれ 海砂利水魚の水行末　雲来末　風来末
        食う寝るところに住むところ やぶら小路のぶら小路
        パイポパイポ　パイポのシューリンガン シューリンガンのクーリンダイ
        クーリンダイのポンポコナーのポンポコピーの 長久命の長助
      </Caption>
    </Wrapper>
    <Wrapper backgroundImage={images.city}>
      <Caption>
        寿限無　寿限無　五劫のすりきれ 海砂利水魚の水行末　雲来末　風来末
        食う寝るところに住むところ やぶら小路のぶら小路
        パイポパイポ　パイポのシューリンガン シューリンガンのクーリンダイ
        クーリンダイのポンポコナーのポンポコピーの 長久命の長助
      </Caption>
    </Wrapper>
  </>
);
