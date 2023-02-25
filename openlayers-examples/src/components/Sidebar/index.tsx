import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <SidebarIcon />
      ㅗㅑ
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const IconImage = styled.img`
  width: 17px;
  height: 15.94px;
  margin-top: calc(22px - 8px);
`;

const SidebarIcon = () => {
  return <Link to="/temp"></Link>;
};

export default Sidebar;
