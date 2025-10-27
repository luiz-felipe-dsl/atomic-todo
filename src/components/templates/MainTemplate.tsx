import styled from 'styled-components';

interface MainTemplateProps {
  children: React.ReactNode;
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  animation: fadeIn 0.6s ease-out;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  color: #4a5568;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
`;

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <Container>
      <Header>
        <Title>Task Manager</Title>
      </Header>
      <main>{children}</main>
    </Container>
  );
};