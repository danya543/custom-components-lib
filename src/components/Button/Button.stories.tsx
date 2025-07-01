import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
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

export const Small_Default: Story = {
  args: {
    children: 'Small Default Button',
    size: 'small',
    disabled: false,
  },
};

export const Medium_Default: Story = {
  args: {
    children: 'Medium Default Button',
    size: 'medium',
    disabled: false,
  },
};

export const Large_Default: Story = {
  args: {
    children: 'Large Default Button',
    size: 'large',
    disabled: false,
  },
};

export const Small_Outlined: Story = {
  args: {
    children: 'Small Outlined Button',
    size: 'small',
    variant: 'outlined',
    disabled: false,
  },
};

export const Medium_Outlined: Story = {
  args: {
    children: 'Medium Outlined Button',
    size: 'medium',
    variant: 'outlined',
    disabled: false,
  },
};

export const Large_Outlined: Story = {
  args: {
    children: 'Large Outlined Button',
    size: 'large',
    variant: 'outlined',
    disabled: false,
  },
};

export const Small_Text: Story = {
  args: {
    children: 'Small Text Button',
    size: 'small',
    variant: 'text',
    disabled: false,
  },
};

export const Medium_Text: Story = {
  args: {
    children: 'Medium Text Button',
    size: 'medium',
    variant: 'text',
    disabled: false,
  },
};

export const Large_Text: Story = {
  args: {
    children: 'Large Text Button',
    size: 'large',
    variant: 'text',
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
