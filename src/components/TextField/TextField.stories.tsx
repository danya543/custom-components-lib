import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'UI/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    placeholder: 'Enter text',
    error: false,
    disabled: false,
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState('Invalid input');

    return <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    placeholder: 'Enter text',
    error: true,
    disabled: false,
  },
};
