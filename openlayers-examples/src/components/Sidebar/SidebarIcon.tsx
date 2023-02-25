import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Menu } from '.';

interface SidebarIconProps {
  menu: Menu;
  isSelected?: boolean;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ menu, isSelected }) => {
  return (
    <Link to="/temp">
      <IconWrapper>
        {isSelected ? (
          <IconImage src={menu.selectedIcon} />
        ) : (
          <IconImage src={menu.icon} />
        )}
      </IconWrapper>
    </Link>
  );
};

const IconWrapper = styled.div`
  width: 44px;
  heigh: 44px;
`;
const IconImage = styled.img``;

export default SidebarIcon;
