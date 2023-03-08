import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function MainLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  height: calc(100% - 5.2rem);

  top: 5.2rem;
`;
