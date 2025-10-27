import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'danger';
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button<Pick<ButtonProps, 'variant'>>`
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  background: ${props => props.variant === 'danger' 
    ? 'linear-gradient(135deg, #ff6b6b 0%, #ee5253 100%)'
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.06);
  }

  &:active {
    transform: translateY(0);
  }

  animation: scaleIn 0.2s ease-out;
`;

export const Button = ({ variant = 'primary', onClick, children }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};