import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'UI/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'boolean' },
    },
    onChange: { action: 'change' },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter text',
    error: false,
  },
};

export const WithError: Story = {
  args: {
    value: 'Invalid input',
    placeholder: 'Enter text',
    error: true,
  },
};
