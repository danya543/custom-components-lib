import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal', () => {
  test('renders children when open is true', () => {
    render(
      <Modal open={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>,
    );

    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render when open is false', () => {
    render(
      <Modal open={false} onClose={() => {}}>
        <div>Hidden Content</div>
      </Modal>,
    );

    expect(screen.queryByText('Hidden Content')).not.toBeInTheDocument();
  });

  test('calls onClose when backdrop is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal open={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByRole('presentation').parentElement!);
    expect(handleClose).toHaveBeenCalled();
  });

  test('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal open={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  test('calls onClose when Escape key is pressed', () => {
    const handleClose = jest.fn();
    render(
      <Modal open={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });
});
