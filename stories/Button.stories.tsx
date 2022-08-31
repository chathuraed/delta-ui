import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../src';

export default {
  title: 'Lanina-UI/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
  disabled: false,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'Button',
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'Button',
  disabled: false,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  label: 'Button',
  disabled: false,
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  label: 'Button',
  disabled: false,
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  label: 'Button',
  disabled: false,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  label: 'Button',
  disabled: false,
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  label: 'Click Me',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
};
