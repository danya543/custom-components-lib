import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return <Switch {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  },
  args: {
    disabled: false,
  },
};
