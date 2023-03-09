import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

import Search from '@/components/Search';
import ovision from '@/assets/img/ovs-new-logo.png';

export default function Header() {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  const isRoot = pathname === '/';

  return (
    <Wrapper>
      <LeftWrapper>
        {isRoot ? (
          <>
            <img src={ovision} alt="ovision" />
            <h1>OpenLayers Examples</h1>
          </>
        ) : (
          <IconWrapper onClick={() => navigation('/')}>
            <FaArrowLeft />
          </IconWrapper>
        )}
      </LeftWrapper>

      {isRoot && <Search />}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  width: 100%;
  height: 5.2rem;
  padding: 0rem 2rem;

  border-bottom: 0.01rem solid gray;

  /* box-shadow: 0 0.3rem 1rem grey; */

  font-size: 1.6rem;
  background-color: #ffffff;
  img {
    width: 3.2rem;
    height: 3.2rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    /* color: #ffffff; */

    /* text-shadow: 0.2rem 0.2rem 0.3rem grey; */
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
