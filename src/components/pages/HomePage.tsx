import { useState, useEffect } from 'react';
import styled from 'styled-components';
import type { Task } from '../../types/Task';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { TaskList } from '../organisms/TaskList';
import { MainTemplate } from '../templates/MainTemplate';

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  animation: fadeIn 0.6s ease-out;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const STORAGE_KEY = 'tasks';

export const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  // Initialize tasks from localStorage on first render using a lazy state initializer.
  // This avoids a race where a separate "write" effect can overwrite stored data with
  // the empty initial state during mount.
  const [initializedTasks] = useState<Task[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as Task[]) : [];
    } catch {
      // If parsing fails, start with an empty list.
      return [];
    }
  });

  // Replace the tasks state with loaded value on mount (keeps semantics and allows
  // subsequent updates to be written to storage).
  useEffect(() => {
    if (initializedTasks && initializedTasks.length > 0) {
      setTasks(initializedTasks);
    }
    // If there are no initialized tasks we intentionally keep the default [] state.
    // NOTE: we don't write to localStorage here — writing is handled by the effect below.
    // This avoids initial overwrite of existing storage with the empty array.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist tasks whenever they change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // ignore storage errors (e.g., quota exceeded) for now
    }
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    
    const task: Task = {
      id: Date.now().toString(),
      name: newTask.trim(),
      completed: false
    };
    
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id: string, newName: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, name: newName } : task
    ));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <MainTemplate>
      <InputContainer>
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          onKeyPress={handleKeyPress}
        />
        <Button onClick={addTask}>Add Task</Button>
      </InputContainer>

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </MainTemplate>
  );
};