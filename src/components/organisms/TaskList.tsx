import styled from 'styled-components';
import type { Task } from '../../types/Task';
import { TaskItem } from '../molecules/TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem 0;

  & > * {
    animation: fadeIn 0.4s ease-out;
  }

  @media (max-width: 640px) {
    padding: 0.5rem;
  }
`;

export const TaskList = ({ tasks, onToggle, onDelete, onEdit }: TaskListProps) => {
  return (
    <StyledTaskList>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </StyledTaskList>
  );
};