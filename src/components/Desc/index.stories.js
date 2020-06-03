import React from 'react';
import Desc from '.';

export default {
  title: 'Components/Desc',
  component: Desc,
};

export const Default = () => (
  <Desc>Content</Desc>
)

Default.story = {
  name: 'Default',
};
