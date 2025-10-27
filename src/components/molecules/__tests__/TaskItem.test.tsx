import { render, screen, fireEvent } from '@testing-library/react';
import { TaskItem } from '../TaskItem';

const mockTask = {
  id: '1',
  name: 'Test Task',
  completed: false,
};

describe('TaskItem', () => {
  const mockHandlers = {
    onToggle: jest.fn(),
    onDelete: jest.fn(),
    onEdit: jest.fn(),
  };

  it('renders task name correctly', () => {
    render(
      <TaskItem
        task={mockTask}
        onToggle={mockHandlers.onToggle}
        onDelete={mockHandlers.onDelete}
        onEdit={mockHandlers.onEdit}
      />
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', () => {
    render(
      <TaskItem
        task={mockTask}
        onToggle={mockHandlers.onToggle}
        onDelete={mockHandlers.onDelete}
        onEdit={mockHandlers.onEdit}
      />
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockHandlers.onToggle).toHaveBeenCalledWith('1');
  });

  it('toggles edit mode when edit button is clicked', () => {
    render(
      <TaskItem
        task={mockTask}
        onToggle={mockHandlers.onToggle}
        onDelete={mockHandlers.onDelete}
        onEdit={mockHandlers.onEdit}
      />
    );

    fireEvent.click(screen.getByText('Edit'));
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });
});