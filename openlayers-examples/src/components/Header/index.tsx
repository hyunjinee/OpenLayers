import styled from 'styled-components';

import ovision from '@/assets/img/ovs-new-logo.png';

export default function Header() {
  return (
    <Wrapper>
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
  padding: 1rem 2rem;

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
