import { render, screen, fireEvent } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('HomePage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adds a task when Add Task is clicked', () => {
    render(<HomePage />);

    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New task')).toBeInTheDocument();
  });

  it('toggles completion when checkbox is clicked', () => {
    render(<HomePage />);

    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Toggle task' } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('deletes a task when Delete is clicked', () => {
    render(<HomePage />);

    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Delete me' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Delete me')).not.toBeInTheDocument();
  });
});