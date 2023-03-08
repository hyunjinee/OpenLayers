import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

import ovision from '@/assets/img/ovs-new-logo.png';

export default function Header() {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  const isRoot = pathname === '/';

  console.log(pathname);
  return (
    <Wrapper>
      {!isRoot && (
        <IconWrapper onClick={() => navigation('/')}>
          <FaArrowLeft />
        </IconWrapper>
      )}
      <img src={ovision} alt="ovision" />
      <h1>OpenLayers Examples</h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;

  gap: 1rem;

  width: 100%;
  height: 5.2rem;
  padding: 0rem 2rem;

  box-shadow: 0 0.3rem 1rem grey;

  font-size: 1.6rem;
  /* background-color: red; */

  img {
    width: 3.2rem;
    height: 3.2rem;
  }

  h1 {
    font-size: 1.5rem;
    /* text-shadow: 0.2rem 0.2rem 0.3rem grey; */
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
