import styled from 'styled-components';
import type { Task } from '../../types/Task';
import { Checkbox } from '../atoms/Checkbox';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { useState } from 'react';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

const StyledTaskItem = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 16px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  animation: slideIn 0.3s ease-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.1);
    border-color: #667eea20;
  }

  ${props => props.completed && `
    background: #f7fafc;
    border-color: #e2e8f0;
    
    &:hover {
      border-color: #e2e8f0;
    }
  `}
`;

const TaskText = styled.span<{ completed: boolean }>`
  margin: 0 1rem;
  flex: 1;
  font-size: 1rem;
  color: ${props => props.completed ? '#a0aec0' : '#4a5568'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  transition: all 0.2s ease;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const TaskItem = ({ task, onToggle, onDelete, onEdit }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.name);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, editValue);
    }
    setIsEditing(!isEditing);
  };

  return (
    <StyledTaskItem completed={task.completed}>
      <Checkbox 
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <Input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <TaskText completed={task.completed}>{task.name}</TaskText>
      )}
      <ButtonGroup>
        <Button onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        <Button variant="danger" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </ButtonGroup>
    </StyledTaskItem>
  );
};