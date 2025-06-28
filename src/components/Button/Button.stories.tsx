import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'text', 'outlined'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    size: 'small',
    variant: 'contained',
    disabled: false,
  },
};

export const WithAction: Story = {
  args: {
    children: 'Click Me',
    size: 'small',
    onClick: () => alert('Clicked!'),
  },
};
