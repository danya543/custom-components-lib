import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setOpen(true)}>Open modal</button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h2>It is modal</h2>
          <p>Here you can add your content</p>
        </Modal>
      </div>
    );
  },
};
