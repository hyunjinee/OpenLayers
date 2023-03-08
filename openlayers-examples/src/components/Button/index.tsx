import styled from 'styled-components';

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export default function Button({ children, onClick }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;

  /* border-radius: 0.2rem; */
  outline: none;
`;
