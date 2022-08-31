import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../src';

export default {
  title: 'Lanina-UI/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: '',
  disabled: false,
  full: false,
  error: false,
  message: 'Required',
};
