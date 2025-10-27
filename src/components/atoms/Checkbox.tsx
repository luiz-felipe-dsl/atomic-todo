import styled from 'styled-components';

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <StyledCheckbox
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};