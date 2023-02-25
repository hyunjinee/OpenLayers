import styled from 'styled-components';

import SidebarIcon from './SidebarIcon';

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <SidebarIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const IconImage = styled.img`
  width: 17px;
  height: 15.94px;
  margin-top: calc(22px - 8px);
`;

export default Sidebar;
